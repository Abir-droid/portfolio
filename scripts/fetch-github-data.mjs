import https from 'https';
import fs from 'fs';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Portfolio-Fetcher/1.0',
        'Accept': 'application/vnd.github.v3+json'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log('Fetching user...');
    const user = await fetchJson('https://api.github.com/users/Abir-droid');
    console.log('User:', user.login, 'Public repos:', user.public_repos);

    console.log('Fetching repos...');
    const repos = await fetchJson('https://api.github.com/users/Abir-droid/repos?per_page=100&sort=updated');
    
    if (!Array.isArray(repos)) {
      console.error('Error fetching repos:', repos);
      return;
    }

    let totalStars = 0;
    let totalForks = 0;
    const languageBytes = {};
    const repoList = [];

    for (const r of repos) {
      if (r.fork) continue; // focus on own repos
      totalStars += r.stargazers_count;
      totalForks += r.forks_count;
      
      repoList.push({
        name: r.name,
        fullName: r.full_name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        updatedAt: r.updated_at,
        createdAt: r.created_at,
        topics: r.topics || []
      });

      // fetch languages byte count
      try {
        const langs = await fetchJson(r.languages_url);
        for (const [lang, bytes] of Object.entries(langs)) {
          languageBytes[lang] = (languageBytes[lang] || 0) + bytes;
        }
      } catch (err) {
        console.warn('Failed language fetch for', r.name);
      }
    }

    const result = {
      username: user.login,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      publicRepos: repos.length,
      ownReposCount: repoList.length,
      totalStars,
      totalForks,
      languageBytes,
      repos: repoList,
      fetchedAt: new Date().toISOString()
    };

    fs.writeFileSync('src/data/githubData.json', JSON.stringify(result, null, 2));
    console.log('Saved to src/data/githubData.json!');
    console.log('Languages found:', Object.keys(languageBytes));
    console.log('Top repos:', repoList.slice(0, 8).map(r => r.name));
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
