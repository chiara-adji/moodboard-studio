export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RAPIDAPI_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RAPIDAPI_KEY belum diatur di environment server.' });
  }

  try {
    const base64Audio = typeof req.body === 'string' ? req.body : (req.body && req.body.audioBase64);
    if (!base64Audio) {
      return res.status(400).json({ error: 'Payload audioBase64 kosong.' });
    }

    const response = await fetch('https://shazam.p.rapidapi.com/songs/v2/detect', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain',
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
      },
      body: base64Audio
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Gagal menghubungi Shazam API', detail: err.message });
  }
}
