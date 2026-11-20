const EVENT_PRESETS = {
      pengajian: {
        name: 'Pengajian',
        dateTime: 'Jumat, 18 Des 2026, jam 09.00 - 11.30 WIB',
        venue: 'Kediaman Mempelai Wanita',
        videoSongTitle: '',
        matchedMusic: null,
        matchedMusic: null,
        matchedMusic: null,
        customNote: '',
        customPalette: null,
        manualBrief: null,
        moments: [
          'Detail baju pengajian, Al-Quran, bunga melati, dan hantaran',
          'Suasana khidmat saat pembacaan ayat suci dan doa bersama keluarga',
          'Momen minta restu dan pelukan haru bersama Ibu dan Ayah',
          'Foto bareng keluarga inti setelah acara selesai'
        ],
        donts: 'Jangan terlalu banyak mengarahkan pose saat doa berlangsung supaya suasananya tetap khidmat, dan jaga jarak agar tidak menutupi pandangan orangtua atau tamu sepuh.'
      },
      siraman: {
        name: 'Siraman',
        dateTime: 'Jumat, 18 Des 2026, jam 13.30 - 16.00 WIB',
        venue: 'Area Taman / Pendopo',
        videoSongTitle: '',
        customNote: '',
        customPalette: null,
        manualBrief: null,
        moments: [
          'Detail kendi, bokor air 7 sumber, dan ronce melati',
          'Momen sungkeman ke kedua orangtua sebelum siraman dimulai',
          'Prosesi siraman oleh orangtua dan sesepuh (usahakan percikan airnya tertangkap jelas)',
          'Potong rikmo, pecah kendi, sampai prosesi dulangan dan gendongan'
        ],
        donts: 'Mohon jaga privasi dan ambil sudut kamera yang sopan saat kain siraman sudah basah. Jangan lupa amankan kamera dan lensa dari cipratan air.'
      },
      harih: {
        name: 'Hari-H (Akad & Resepsi)',
        dateTime: 'Sabtu, 19 Des 2026, jam 07.30 - 13.30 WIB',
        venue: 'Gedung Soos Sasono Suko, Cepu',
        videoSongTitle: '',
        customNote: '',
        customPalette: null,
        manualBrief: null,
        moments: [
          'Detail cincin, mahar, undangan, dan persiapan rias pagi',
          'Detik-detik Ijab Kabul, ekspresi lega setelah sah, dan tanda tangan buku nikah',
          'Tukar cincin, foto buku nikah, dan sungkeman setelah akad',
          'Momen salaman dan ngobrol hangat dengan kolega orangtua di pelaminan atau area prasmanan',
          'Foto formasi keluarga besar dan suasana keseluruhan gedung'
        ],
        donts: 'Saat ijab kabul berlangsung, tolong jangan menghalangi pandangan orangtua dan saksi. Waktu resepsi prasmanan nanti, jaga ritme foto tamu VIP dan kolega orangtua supaya tidak menumpuk antrean.'
      }
    };

    const MUSIC_LIBRARY = {
      orchestral: {
        concept: 'Klasik Orkestra / Strings Instrumental (Sinematik, Anggun & Timeless)',
        desc: 'Mengandalkan alunan biola, cello, dan orkestra tanpa vokal supaya suasana prosesi terasa megah, sakral, dan emosional tanpa bertabrakan dengan suara doa atau ijab kabul.',
        songs: [
          'Ludovico Einaudi - Experience / Nuvole Bianche (piano & strings sinematik)',
          'Max Richter - On the Nature of Daylight (strings emosional & mendalam)',
          'Johann Pachelbel - Canon in D (versi strings kuartet klasik)',
          'The Piano Guys - A Thousand Years (instrumental cello & piano)',
          'Joe Hisaishi - Merry-Go-Round of Life (orkestra hangat & romantis)'
        ]
      },
      piano: {
        concept: 'Piano & Akustik Instrumental (Minimalis, Lembut & Intim)',
        desc: 'Alunan piano atau instrumen solo yang bersih tanpa lirik, sangat pas untuk momen persiapan pagi, sungkeman, dan pengajian yang khidmat.',
        songs: [
          'Yiruma - River Flows in You (piano lembut & romantis)',
          'Alexis Ffrench - Bluebird (piano modern hangat)',
          'Ryuichi Sakamoto - Merry Christmas Mr. Lawrence (klasik kontemporer)',
          'Maxence Cyrin - Where Is My Mind (versi piano instrumental)'
        ]
      },
      slow: {
        concept: 'Ballad & Akustik Vokal Lembut (~65-80 BPM)',
        desc: 'Cocok untuk alur video yang tenang dan penuh emosi, dengan iringan vokal lembut saat jeda antar prosesi.',
        songs: [
          'Sleeping At Last - Turning Page (piano & strings sinematik)',
          'Banda Neira - Sampai Jadi Debu (akustik puitis Indonesia)',
          'Haley Reinhart - Can\'t Help Falling in Love (klasik lembut)',
          'Kina Grannis - Can\'t Help Falling in Love (akustik intim)'
        ]
      },
      mid: {
        concept: 'Warm Indie Folk & Romantic Pop (~85-110 BPM)',
        desc: 'Pas untuk cerita dokumenter yang mengalir santai dari persiapan pagi sampai momen senyum bersama keluarga.',
        songs: [
          'Daniel Caesar ft. H.E.R. - Best Part (R&B akustik modern)',
          'Payung Teduh - Akad (hangat & akrab untuk momen Indonesia)',
          'Tulus - Teman Hidup (romantis & positif)',
          'Raisa & Afgan - Percayalah (lembut tapi berenergi)'
        ]
      },
      upbeat: {
        concept: 'Ceria, Hidup & Celebratory (~115+ BPM)',
        desc: 'Cocok untuk highlight resepsi yang ramai, penuh tawa tamu, dan klip Reels/WCC yang energik.',
        songs: [
          'Maliq & D\'Essentials - Pilihanku (groove ceria & elegan)',
          'Bruno Major - Easily (modern romantic groove)',
          'RAN - Dekat di Hati (ringan & penuh senyum)',
          'Natalie Cole - This Will Be (klasik ceria untuk resepsi)'
        ]
      }
    };

    let state = {
      activeEvent: 'pengajian',
      layout: 'masonry2',
      globalCouple: 'Chiara & Adji',
      globalWO: 'Tim WO (isi nomor PIC)',
      brideAngle: 'Bebas, kedua sisi wajah sama bagus',
      brideAngleNote: '',
      wccFocus: 'BTS natural, klip vertikal 9:16 siap Reels/TikTok, & raw clips H+1',
      events: JSON.parse(JSON.stringify(EVENT_PRESETS)),
      media: {
        pengajian: [],
        siraman: [],
        harih: []
      }
    };

    const STORAGE_KEY = 'wedding_moodboard_analyzer_v5';

    function makeSampleImage(title, subtitle, bg1, bg2, acc, w = 640, h = 480) {
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, bg1);
      grad.addColorStop(1, bg2);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = acc;
      ctx.lineWidth = 2;
      ctx.strokeRect(24, 24, w - 48, h - 48);

      ctx.beginPath();
      ctx.arc(w / 2, h * 0.42, Math.min(w, h) * 0.17, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.fill();

      ctx.fillStyle = '#2b2622';
      ctx.font = '600 24px Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, w / 2, h * 0.42);

      ctx.fillStyle = '#5d554d';
      ctx.font = '400 15px sans-serif';
      ctx.fillText(subtitle, w / 2, h * 0.42 + 34);

      ctx.fillStyle = '#8c6d46';
      ctx.font = '500 11px sans-serif';
      ctx.fillText('CONTOH REFERENSI • UNGGAH FOTO ASLI', w / 2, h - 42);
      return c.toDataURL('image/jpeg', 0.85);
    }

    function rgbToHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h = 0, s = 0;
      const l = (max + min) / 2;
      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return [h * 360, s * 100, l * 100];
    }

    function describeHueFamily(hexList) {
      if (!hexList.length) return 'Netral Alami';
      let warmCount = 0, greenCount = 0, coolCount = 0, neutralCount = 0;
      hexList.forEach((hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const [h, s] = rgbToHsl(r, g, b);
        if (s < 14) neutralCount++;
        else if (h < 65 || h >= 320) warmCount++;
        else if (h >= 65 && h < 170) greenCount++;
        else coolCount++;
      });
      if (neutralCount >= 3 && warmCount <= 1) return 'Monokrom / Netral Bersih';
      if (greenCount >= 2 && warmCount >= 1) return 'Sage Hijau & Hangat Alami';
      if (warmCount >= 3) return 'Earthy, Ivory & Hangat Keemasan';
      if (coolCount >= 2) return 'Clean Sejuk & Klasik';
      return 'Campuran Hangat & Netral';
    }

    function analyzeDataUrlMetrics(dataUrl) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const w = 64;
          const h = Math.max(36, Math.round((img.height / img.width) * 64));
          const c = document.createElement('canvas');
          c.width = w;
          c.height = h;
          const ctx = c.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const data = ctx.getImageData(0, 0, w, h).data;

          let sumLum = 0, sumWarmth = 0, sumSat = 0;
          let highlightPixels = 0, shadowPixels = 0;
          const lums = [];
          const samples = [];
          const fallbackSamples = [];

          const totalPixels = w * h;
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            lums.push(lum);
            sumLum += lum;
            sumWarmth += (r - b);
            if (lum > 215) highlightPixels++;
            if (lum < 45) shadowPixels++;

            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);
            const sat = maxC === 0 ? 0 : (maxC - minC) / maxC;
            sumSat += sat;

            if (i % 8 === 0) {
              fallbackSamples.push([r, g, b]);
              if (lum > 18 && lum < 244) {
                samples.push([r, g, b]);
                if (sat > 0.14) samples.push([r, g, b]);
              }
            }
          }

          const avgLum = sumLum / totalPixels;
          const avgWarmth = sumWarmth / totalPixels;
          const avgSat = sumSat / totalPixels;
          const highlightRatio = (highlightPixels / totalPixels) * 100;
          const shadowRatio = (shadowPixels / totalPixels) * 100;

          let varLum = 0;
          for (let i = 0; i < lums.length; i++) {
            const d = lums[i] - avgLum;
            varLum += d * d;
          }
          const stdLum = Math.sqrt(varLum / totalPixels);

          resolve({
            avgLum,
            avgWarmth,
            avgSat,
            stdLum,
            highlightRatio,
            shadowRatio,
            aspectRatio: img.width / img.height,
            samples: samples.length >= 20 ? samples : fallbackSamples
          });
        };
        img.src = dataUrl;
      });
    }

    function rgbToHex(r, g, b) {
      return '#' + [r, g, b].map((x) => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0')).join('');
    }

    function extractKMeansPalette(allSamples, k = 5) {
      if (!allSamples.length) return [];
      const step = Math.max(1, Math.floor(allSamples.length / 1200));
      const pts = [];
      for (let i = 0; i < allSamples.length; i += step) pts.push(allSamples[i]);

      const actualK = Math.min(k, pts.length);
      const sortedByLum = [...pts].sort((a, b) => (0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]) - (0.299 * b[0] + 0.587 * b[1] + 0.114 * b[2]));
      let centroids = [];
      for (let c = 0; c < actualK; c++) {
        const idx = Math.floor(((c + 0.5) / actualK) * sortedByLum.length);
        centroids.push([...sortedByLum[idx]]);
      }

      const assignments = new Array(pts.length).fill(0);
      for (let iter = 0; iter < 10; iter++) {
        const sums = Array.from({ length: actualK }, () => [0, 0, 0, 0]);
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          let bestC = 0;
          let bestDist = Infinity;
          for (let c = 0; c < actualK; c++) {
            const cen = centroids[c];
            const dr = p[0] - cen[0];
            const dg = p[1] - cen[1];
            const db = p[2] - cen[2];
            const dist = 2 * dr * dr + 4 * dg * dg + 3 * db * db;
            if (dist < bestDist) {
              bestDist = dist;
              bestC = c;
            }
          }
          assignments[i] = bestC;
          sums[bestC][0] += p[0];
          sums[bestC][1] += p[1];
          sums[bestC][2] += p[2];
          sums[bestC][3] += 1;
        }
        for (let c = 0; c < actualK; c++) {
          if (sums[c][3] > 0) {
            centroids[c] = [sums[c][0] / sums[c][3], sums[c][1] / sums[c][3], sums[c][2] / sums[c][3]];
          }
        }
      }

      const counts = new Array(actualK).fill(0);
      assignments.forEach((c) => counts[c]++);

      const ranked = centroids
        .map((rgb, i) => ({ rgb, count: counts[i] }))
        .filter((x) => x.count > 0)
        .sort((a, b) => b.count - a.count);

      const finalColors = [];
      for (const item of ranked) {
        const tooClose = finalColors.some((fc) => {
          const dr = fc[0] - item.rgb[0];
          const dg = fc[1] - item.rgb[1];
          const db = fc[2] - item.rgb[2];
          return Math.sqrt(dr * dr + dg * dg + db * db) < 26;
        });
        if (!tooClose) finalColors.push(item.rgb);
      }

      finalColors.sort((a, b) => (0.299 * b[0] + 0.587 * b[1] + 0.114 * b[2]) - (0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]));
      return finalColors.map((c) => rgbToHex(c[0], c[1], c[2]));
    }


    async function findSimilarSongsByTitle(rawQuery) {
      const q = (rawQuery || '').trim();
      if (!q) return null;
      const low = q.toLowerCase();

      // 1. Specialized Grand Orchestral / Italian Film Score / Classical Cinema matcher
      if (/ortolani|donna malese|morricone|nino rota|piccioni|cipriani|trovajoli|francis lai|mancini|zimmer|hisaishi|john williams|tchaikovsky|debussy|ravel|rachmaninoff|mahler|elgar|beethoven|mozart|vivaldi|canon|einaudi|richter|orchestra|orkestra|symphony|concerto|strings|bridgerton/.test(low)) {
        const isItalianCinema = /ortolani|donna malese|morricone|nino rota|piccioni|cipriani|trovajoli|francis lai|mancini/.test(low);
        if (isItalianCinema) {
          return {
            matchedTitle: q,
            concept: 'Orkestra Klasik Sinematik & Megah (Grand Strings & Brass Score)',
            desc: 'Aransemen orkestra klasik penuh dengan alunan strings yang megah, romantis, dan dramatis ala musik film klasik Eropa—sangat kuat membangun momen sakral dan emosional tanpa lirik.',
            songs: [
              'Ennio Morricone - Nuovo Cinema Paradiso (Love Theme)',
              'Nino Rota - Love Theme from Romeo and Juliet (A Time for Us)',
              'Stelvio Cipriani - Anonimo Veneziano',
              'Francis Lai - Theme from Love Story (Orchestral)',
              'Piero Piccioni - Amore Mio Aiutami (Main Theme)'
            ]
          };
        }
        return { matchedTitle: q, ...MUSIC_LIBRARY.orchestral };
      }

      if (/yiruma|piano|sakamoto|ffrench|instrumental|acoustic guitar/.test(low)) {
        return { matchedTitle: q, ...MUSIC_LIBRARY.piano };
      }
      if (/jazz|buble|sinatra|ella|nat king|chet|bossanova|bossa|la vie en rose/.test(low)) {
        return {
          matchedTitle: q,
          concept: 'Classic Jazz & Warm Bossa Nova',
          desc: 'Alunan vokal atau instrumen jazz klasik yang santai, elegan, dan berkelas untuk suasana makan atau resepsi.',
          songs: [
            'Michael Buble - L-O-V-E / Everything',
            'Chet Baker - My Funny Valentine',
            'Norah Jones - Come Away With Me',
            'Stan Getz & Joao Gilberto - The Girl From Ipanema'
          ]
        };
      }

      // 2. Public iTunes Search API for other pop/indie/R&B/OST tracks (filtering out noisy genre mismatches)
      try {
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=3`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.results && data.results.length) {
            const top = data.results[0];
            const genre = top.primaryGenreName || 'Pop';
            const artist = top.artistName || '';
            const track = top.trackName || q;

            if (/classical|orchestra|instrumental/i.test(genre)) {
              return { matchedTitle: `${artist} - ${track}`, ...MUSIC_LIBRARY.orchestral };
            }
            if (/soundtrack|easy listening/i.test(genre)) {
              return {
                matchedTitle: `${artist} - ${track}`,
                concept: `Orkestra & Soundtrack Sinematik (dari "${track}")`,
                desc: 'Mengikuti nuansa skor musik sinematik yang megah dan emosional tanpa vokal yang mengganggu suara prosesi.',
                songs: [
                  'Ennio Morricone - Nuovo Cinema Paradiso (Love Theme)',
                  'Ludovico Einaudi - Experience',
                  'Max Richter - On the Nature of Daylight',
                  'Joe Hisaishi - Merry-Go-Round of Life'
                ]
              };
            }

            const simQuery = `${artist} ${genre}`;
            const simRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(simQuery)}&entity=song&limit=10`);
            let similarList = [];
            if (simRes.ok) {
              const simData = await simRes.json();
              const seen = new Set([track.toLowerCase()]);
              for (const item of (simData.results || [])) {
                const tName = item.trackName || '';
                const aName = item.artistName || '';
                const key = `${tName.toLowerCase()} - ${aName.toLowerCase()}`;
                if (tName && !seen.has(tName.toLowerCase()) && !seen.has(key)) {
                  seen.add(tName.toLowerCase());
                  seen.add(key);
                  similarList.push(`${aName} - ${tName}`);
                }
                if (similarList.length >= 4) break;
              }
            }

            if (similarList.length >= 2) {
              return {
                matchedTitle: `${artist} - ${track}`,
                concept: `${genre} (berdasarkan "${track}")`,
                desc: `Mengikuti karakter aransemen dan nuansa ${genre.toLowerCase()} dari lagu "${track}" agar alur video terasa serasi.`,
                songs: similarList
              };
            }
          }
        }
      } catch (e) {}

      if (/maliq|ran|bruno major|disco|upbeat|happy|marry you/.test(low)) {
        return { matchedTitle: q, ...MUSIC_LIBRARY.upbeat };
      }
      if (/turning page|adele|sheeran|john legend|sam smith|banda neira|nadin/.test(low)) {
        return { matchedTitle: q, ...MUSIC_LIBRARY.slow };
      }
      return { matchedTitle: q, ...MUSIC_LIBRARY.mid };
    }

    function computeAggregateAnalysis(items, ev) {
      if (!items.length) return null;

      let sumLum = 0, sumWarmth = 0, sumSat = 0, sumStd = 0;
      let sumHighlight = 0, sumShadow = 0;
      let portraitCount = 0, landscapeCount = 0, videoCount = 0;
      let motionSum = 0;
      let bpmList = [];
      const pooledSamples = [];

      items.forEach((item) => {
        const m = item.metrics;
        if (!m) return;
        sumLum += m.avgLum;
        sumWarmth += m.avgWarmth;
        sumSat += m.avgSat;
        sumStd += m.stdLum;
        sumHighlight += m.highlightRatio || 0;
        sumShadow += m.shadowRatio || 0;
        if (m.aspectRatio < 0.92) portraitCount++;
        else if (m.aspectRatio > 1.1) landscapeCount++;

        if (item.type === 'video') {
          videoCount++;
          motionSum += item.motionScore || 12;
          if (item.bpm) bpmList.push(item.bpm);
        }
        (m.samples || []).forEach((s) => pooledSamples.push(s));
      });

      const n = items.length;
      const avgLum = sumLum / n;
      const avgWarmth = sumWarmth / n;
      const avgSat = sumSat / n;
      const avgContrast = sumStd / n;
      const avgHighlight = sumHighlight / n;
      const avgShadow = sumShadow / n;

      const autoPalette = extractKMeansPalette(pooledSamples, 5);
      const hexPalette = (ev && Array.isArray(ev.customPalette) && ev.customPalette.length) ? ev.customPalette : autoPalette;
      const hueFamily = describeHueFamily(hexPalette);

      // Detailed lighting profile
      let lightingLabel, lightingSub, lightingGuidance;
      if (avgLum >= 185 || avgHighlight > 35) {
        lightingLabel = 'Terang & Ringan (Bright Airy)';
        lightingSub = `Kecerahan ${Math.round(avgLum)}/255 • Highlight ${Math.round(avgHighlight)}%`;
        lightingGuidance = 'Referensi dominan terang dan ringan. Gunakan cahaya alami dari jendela atau pantulan lembut ke langit-langit. Jangan pakai flash langsung yang terlalu keras supaya detail kain putih, kebaya, dan ronce melati tetap terlihat halus.';
      } else if (avgLum >= 135) {
        lightingLabel = 'Natural Seimbang';
        lightingSub = `Kecerahan ${Math.round(avgLum)}/255 • Cahaya merata`;
        lightingGuidance = 'Pencahayaan referensi tergolong merata antara wajah dan latar ruangan. Kalau venue agak redup, cukup pakai fill light lembut agar wajah tetap cerah tanpa menghilangkan suasana asli gedung.';
      } else if (avgShadow > 30 && avgHighlight > 10) {
        lightingLabel = 'Flash / Kontras Dramatis';
        lightingSub = `Shadow ${Math.round(avgShadow)}% • Sorotan tegas`;
        lightingGuidance = 'Terlihat banyak permainan bayangan gelap dengan sorotan cahaya tegas di subjek (gaya flash editorial/dramatis). Pastikan fokus wajah tetap tajam dan latar tidak terlalu gelap saat foto keluarga.';
      } else {
        lightingLabel = 'Teduh & Intim (Moody)';
        lightingSub = `Kecerahan ${Math.round(avgLum)}/255 • Shadow ${Math.round(avgShadow)}%`;
        lightingGuidance = 'Nuansa cahayanya cenderung teduh dan intim. Arahkan cahaya lembut dari samping (side-light) ke wajah pengantin, dan jaga ISO tetap rapi agar area gelapnya bersih tanpa bintik kasar.';
      }

      // Detailed color & warmth
      let toneLabel, toneSub, toneGuidance;
      if (avgWarmth >= 22) {
        toneLabel = 'Hangat Keemasan';
        toneSub = `${hueFamily}`;
        toneGuidance = 'Warna foto dan video diarahkan hangat seperti cahaya sore/lampu krem, tapi tetap jaga warna kulit wajah terlihat sehat dan tidak terlalu kuning atau kehijauan.';
      } else if (avgWarmth >= 4) {
        toneLabel = 'Natural Sesuai Asli';
        toneSub = `${hueFamily}`;
        toneGuidance = 'Warna dibuat bersih dan natural sesuai warna asli di lokasi (true-to-color), supaya warna kebaya, dekorasi bunga, dan kulit tampak jujur dan awet dilihat jangka panjang.';
      } else {
        toneLabel = 'Bersih & Sejuk';
        toneSub = `${hueFamily}`;
        toneGuidance = 'Pertahankan warna putih agar terlihat bersih tanpa bias kuning, sambil menjaga rona pipi dan bibir tetap segar saat proses color grading.';
      }

      // Dynamic range & photo style archetype
      let contrastLabel, contrastSub, photoArchetype;
      if (avgContrast < 42 && avgSat < 0.25) {
        contrastLabel = 'Soft Pastel / Matte';
        contrastSub = 'Kontras halus, warna kalem';
        photoArchetype = 'Gaya fotonya tenang dan lembut. Kurangi pose yang terlalu kaku; biarkan keluarga bergerak santai sambil tangkap ekspresi haru, senyum tipis, dan detail kecil dengan fokus lembut.';
      } else if (avgContrast >= 56) {
        contrastLabel = 'Editorial Tegas';
        contrastSub = 'Kontras tajam & berdimensi';
        photoArchetype = 'Komposisinya terlihat rapi dan berkarakter editorial. Padukan momen candid yang jujur dengan beberapa potret pasangan yang bersih dan tegas di sela acara.';
      } else if (avgSat >= 0.35) {
        contrastLabel = 'Cerita Hidup & Kaya Warna';
        contrastSub = 'Warna segar & penuh energi';
        photoArchetype = 'Fotonya terasa hidup dan kaya warna. Fokus tangkap interaksi hangat antar generasi, warna-warni bunga/busana, serta ekspresi tawa tamu dan orangtua.';
      } else {
        contrastLabel = 'Dokumenter Timeless';
        contrastSub = 'Kontras seimbang & rapi';
        photoArchetype = 'Gaya dokumenter yang bersih dan rapi: sekitar 70-75% momen candid apa adanya saat acara berjalan, dan 25-30% foto keluarga inti yang tertata.';
      }

      // Framing mix
      let framingNote;
      if (portraitCount > landscapeCount) {
        framingNote = 'Referensi banyak memakai framing vertikal/close-up, jadi perbanyak juga potret setengah badan dan detail ekspresi (sangat cocok juga untuk stok konten vertikal).';
      } else if (landscapeCount > portraitCount) {
        framingNote = 'Referensi banyak memakai framing lebar (wide), jadi jangan lupa ambil sudut lebar yang memperlihatkan kemegahan ruangan, dekorasi, dan suasana tamu.';
      } else {
        framingNote = 'Kombinasikan sudut lebar untuk suasana ruangan dengan close-up ekspresi dan detail busana secara seimbang.';
      }

      // Video & Music Analysis
      let smoothCount = 0;
      items.forEach((it) => { if (it.isInstrumentalSmooth) smoothCount++; });
      let musicTier = 'mid';
      let avgBpm = null;
      if (bpmList.length) avgBpm = Math.round(bpmList.reduce((a, b) => a + b, 0) / bpmList.length);

      if (ev && ev.matchedMusic && ev.matchedMusic.songs && ev.matchedMusic.songs.length) {
        return {
          hexPalette, hueFamily, lightingLabel, lightingSub, lightingGuidance,
          toneLabel, toneSub, toneGuidance, contrastLabel, contrastSub,
          photoArchetype, framingNote,
          musicLabel: ev.matchedMusic.concept.split('(')[0].trim(),
          musicSub: `Mirip dengan: ${ev.matchedMusic.matchedTitle || ev.videoSongTitle}`,
          musicProfile: ev.matchedMusic,
          videoCount
        };
      } else if (videoCount > 0 && smoothCount >= Math.ceil(videoCount / 2)) {
        musicTier = (avgBpm && avgBpm < 78) ? 'piano' : 'orchestral';
      } else if (avgBpm) {
        if (avgBpm < 84) musicTier = 'slow';
        else if (avgBpm > 112) musicTier = 'upbeat';
        else musicTier = 'mid';
      } else if (videoCount > 0) {
        const avgMotion = motionSum / videoCount;
        musicTier = avgMotion > 18 ? 'upbeat' : avgMotion < 10 ? 'orchestral' : 'mid';
      } else {
        // No video uploaded and no manual song title entered
        return {
          hexPalette, hueFamily, lightingLabel, lightingSub, lightingGuidance,
          toneLabel, toneSub, toneGuidance, contrastLabel, contrastSub,
          photoArchetype, framingNote,
          musicLabel: 'Belum Teridentifikasi',
          musicSub: 'Lagu belum bisa diidentifikasi karena belum ada video yang diupload',
          musicProfile: null,
          videoCount
        };
      }

      const musicProfile = MUSIC_LIBRARY[musicTier];
      const tierNames = {
        orchestral: 'Klasik Orkestra / Strings',
        piano: 'Piano Instrumental',
        slow: 'Ballad Pelan',
        mid: 'Indie / Pop Mengalir',
        upbeat: 'Upbeat Ceria'
      };
      const musicLabel = avgBpm ? `${tierNames[musicTier]} (${avgBpm} BPM)` : tierNames[musicTier];
      const musicSub = 'Dianalisis otomatis dari audio video';

      return {
        hexPalette,
        hueFamily,
        lightingLabel,
        lightingSub,
        lightingGuidance,
        toneLabel,
        toneSub,
        toneGuidance,
        contrastLabel,
        contrastSub,
        photoArchetype,
        framingNote,
        musicLabel,
        musicSub,
        musicProfile,
        videoCount
      };
    }

    async function buildSampleItems(eventKey) {
      let defs = [];
      if (eventKey === 'pengajian') {
        defs = [
          { title: 'Cahaya Pagi Lembut', sub: 'Terang alami dari jendela', bg1: '#f8f2ea', bg2: '#eadbc8', acc: '#c9b39c', w: 540, h: 680 },
          { title: 'Candid Doa & Restu', sub: 'Ekspresi haru orangtua', bg1: '#f1e7da', bg2: '#dfc9b0', acc: '#b89f86', w: 680, h: 480 },
          { title: 'Detail Melati & Mushaf', sub: 'Close-up lembut', bg1: '#faf6f0', bg2: '#e7ddd0', acc: '#c5b4a0', w: 560, h: 560 },
          { title: 'Potret Keluarga', sub: 'Santai tapi rapi', bg1: '#efe8df', bg2: '#dad0c2', acc: '#b0a291', w: 640, h: 460 }
        ];
      } else if (eventKey === 'siraman') {
        defs = [
          { title: 'Segar Outdoor Alami', sub: 'Warna daun & melati asli', bg1: '#eaf0eb', bg2: '#d2ded5', acc: '#9eb3a3', w: 540, h: 660 },
          { title: 'Percikan Air Siraman', sub: 'Gerak air tertangkap jelas', bg1: '#f3ede4', bg2: '#e1d3c0', acc: '#bfa98f', w: 680, h: 460 },
          { title: 'Sungkeman Orangtua', sub: 'Fokus ekspresi hangat', bg1: '#efe4d7', bg2: '#dbc7b2', acc: '#b69c82', w: 560, h: 560 },
          { title: 'Detail Kendi & Bokor', sub: 'Ornamen adat & bunga', bg1: '#f2f0e9', bg2: '#dcd7c9', acc: '#b5ae9c', w: 640, h: 480 }
        ];
      } else {
        defs = [
          { title: 'Khidmat Ijab Kabul', sub: 'Momen sah & lega', bg1: '#f4efe8', bg2: '#e2d7c8', acc: '#bfa990', w: 680, h: 460 },
          { title: 'Detail Cincin & Mahar', sub: 'Bersih dan terang', bg1: '#f8f5ef', bg2: '#e8dfd2', acc: '#c8b8a2', w: 540, h: 660 },
          { title: 'Hangat Bersama Tamu', sub: 'Salaman kolega orangtua', bg1: '#efe7dc', bg2: '#dacbb8', acc: '#b39f89', w: 640, h: 480 },
          { title: 'Potret Pengantin', sub: 'Elegan dan natural', bg1: '#ece6dd', bg2: '#d5cbc0', acc: '#aa9c8c', w: 560, h: 560 }
        ];
      }

      const items = [];
      for (let i = 0; i < defs.length; i++) {
        const d = defs[i];
        const src = makeSampleImage(d.title, d.sub, d.bg1, d.bg2, d.acc, d.w, d.h);
        const metrics = await analyzeDataUrlMetrics(src);
        items.push({ id: `sample_${eventKey}_${i}`, type: 'image', name: d.title, src, metrics });
      }
      return items;
    }

    async function initApp() {
      let loaded = false;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.events && parsed.media) {
            state = parsed;
            loaded = true;
          }
        }
      } catch (e) {}

      if (!loaded) {
        state.media.pengajian = await buildSampleItems('pengajian');
        state.media.siraman = await buildSampleItems('siraman');
        state.media.harih = await buildSampleItems('harih');
      }
      renderAll();
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {}
    }

    let toastTimer = null;
    function showToast(msg) {
      const el = document.getElementById('toast');
      document.getElementById('toastText').textContent = msg;
      el.classList.remove('hidden');
      el.classList.add('flex');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        el.classList.add('hidden');
        el.classList.remove('flex');
      }, 2800);
    }

    function getCurrentEvent() {
      return state.events[state.activeEvent];
    }

    function getCurrentMedia() {
      return state.media[state.activeEvent] || [];
    }

    function renderAll() {
      const ev = getCurrentEvent();
      const items = getCurrentMedia();
      const analysis = computeAggregateAnalysis(items, ev);

      document.querySelectorAll('.event-tab').forEach((btn) => {
        const active = btn.dataset.event === state.activeEvent;
        btn.classList.toggle('tab-active', active);
        btn.classList.toggle('bg-white', !active);
        btn.classList.toggle('border', !active);
        btn.classList.toggle('border-[#e8e1d7]', !active);
        btn.classList.toggle('text-[#1f1d1a]', !active);
      });

      document.querySelectorAll('.layout-btn').forEach((btn) => {
        const active = btn.dataset.layout === state.layout;
        btn.classList.toggle('bg-[#1f1d1a]', active);
        btn.classList.toggle('text-white', active);
        btn.classList.toggle('text-[#6b655e]', !active);
      });

      document.getElementById('globalCouple').value = state.globalCouple || '';
      document.getElementById('globalWO').value = state.globalWO || '';
      document.getElementById('eventDateTime').value = ev.dateTime || '';
      document.getElementById('eventVenue').value = ev.venue || '';
      document.getElementById('uploadEventName').textContent = ev.name;
      document.getElementById('customNoteInput').value = ev.customNote || '';
      document.getElementById('videoSongTitle').value = ev.videoSongTitle || '';
      document.getElementById('songLookupStatus').textContent = (ev.matchedMusic && ev.videoSongTitle) ? `Konsep aktif: ${ev.matchedMusic.concept}` : '';
      document.getElementById('brideAngleSelect').value = state.brideAngle || 'Bebas, kedua sisi wajah sama bagus';
      document.getElementById('brideAngleNote').value = state.brideAngleNote || '';
      document.getElementById('wccFocusSelect').value = state.wccFocus || 'BTS natural, klip vertikal 9:16 siap Reels/TikTok, & raw clips H+1';

      renderMediaList(items);
      renderCollage(items, ev, analysis);
      renderAnalysisCards(analysis);
      renderBriefEditor(ev, items, analysis);
    }

    function renderMediaList(items) {
      const wrap = document.getElementById('mediaList');
      wrap.innerHTML = '';
      items.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'group relative overflow-hidden rounded-xl border border-[#e8e1d7] bg-[#faf8f5]';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.name;
        img.className = 'h-24 w-full object-contain bg-[#f2ece3]';

        const badge = document.createElement('span');
        badge.className = 'absolute left-2 top-2 rounded bg-[#1f1d1a]/80 px-1.5 py-0.5 text-[10px] font-medium text-white';
        badge.textContent = item.type === 'video' ? (item.bpm ? `VIDEO ${item.bpm} BPM` : 'VIDEO') : 'FOTO';

        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.textContent = '×';
        delBtn.title = 'Hapus referensi';
        delBtn.className = 'absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-[#1f1d1a] shadow hover:bg-red-600 hover:text-white transition';
        delBtn.addEventListener('click', () => {
          items.splice(idx, 1);
          getCurrentEvent().customPalette = null;
          saveState();
          renderAll();
        });

        const foot = document.createElement('div');
        foot.className = 'truncate px-2 py-1 text-[11px] font-medium text-[#1f1d1a] bg-white border-t border-[#e8e1d7]';
        foot.textContent = item.name;

        card.appendChild(img);
        card.appendChild(badge);
        card.appendChild(delBtn);
        card.appendChild(foot);
        wrap.appendChild(card);
      });
    }

    function renderCollage(items, ev, analysis) {
      document.getElementById('collageCoupleLabel').textContent = (state.globalCouple || 'MEMPELAI').toUpperCase();
      document.getElementById('collageTitleLabel').textContent = `Moodboard ${ev.name}`;
      document.getElementById('collageDateLabel').textContent = ev.dateTime || '-';
      document.getElementById('collageToneLabel').textContent = analysis
        ? `${analysis.toneLabel} • ${analysis.lightingLabel}`
        : 'Menunggu foto/video referensi';

      const paletteWrap = document.getElementById('paletteSwatches');
      const paletteBar = document.getElementById('collagePaletteBar');
      paletteWrap.innerHTML = '';
      if (analysis && analysis.hexPalette.length) {
        paletteBar.classList.remove('hidden');
        analysis.hexPalette.forEach((hex, idx) => {
          const label = document.createElement('label');
          label.className = 'flex cursor-pointer items-center gap-1 rounded px-1 py-0.5 hover:bg-[#faf8f5]';
          label.title = 'Klik untuk menyesuaikan warna ini';

          const picker = document.createElement('input');
          picker.type = 'color';
          picker.value = hex;
          picker.className = 'sr-only';
          picker.addEventListener('input', (e) => {
            const currentPal = [...analysis.hexPalette];
            currentPal[idx] = e.target.value;
            ev.customPalette = currentPal;
            saveState();
            renderAll();
          });

          const dot = document.createElement('span');
          dot.className = 'inline-block h-4 w-4 rounded-full border border-[#d6ccbe]';
          dot.style.backgroundColor = hex;

          const code = document.createElement('span');
          code.className = 'font-mono text-[10px] text-[#6b655e]';
          code.textContent = hex.toUpperCase();

          label.appendChild(picker);
          label.appendChild(dot);
          label.appendChild(code);
          paletteWrap.appendChild(label);
        });
      } else {
        paletteBar.classList.add('hidden');
      }

      const grid = document.getElementById('collageGrid');
      const empty = document.getElementById('collageEmpty');
      grid.innerHTML = '';

      if (!items.length) {
        empty.classList.remove('hidden');
        return;
      }
      empty.classList.add('hidden');

      grid.className = state.layout === 'masonry3' ? 'columns-2 sm:columns-3 gap-3' : 'columns-2 gap-3';

      items.forEach((item) => {
        const fig = document.createElement('figure');
        fig.className = 'relative mb-3 break-inside-avoid overflow-hidden rounded-lg border border-[#e8e1d7] bg-white';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.name;
        img.className = 'block w-full h-auto';

        fig.appendChild(img);
        if (item.type === 'video') {
          const vTag = document.createElement('span');
          vTag.className = 'absolute left-2 bottom-2 rounded bg-[#1f1d1a]/80 px-2 py-0.5 text-[10px] font-medium text-white';
          vTag.textContent = item.bpm ? `Video (${item.bpm} BPM)` : 'Frame Video';
          fig.appendChild(vTag);
        }
        grid.appendChild(fig);
      });
    }

    function renderAnalysisCards(analysis) {
      if (!analysis) {
        ['metricLighting', 'metricTone', 'metricContrast', 'metricMusic'].forEach((id) => {
          document.getElementById(id).textContent = 'Menunggu Media';
        });
        ['metricLightingSub', 'metricToneSub', 'metricContrastSub', 'metricMusicSub'].forEach((id) => {
          document.getElementById(id).textContent = 'Unggah foto atau video';
        });
        return;
      }
      document.getElementById('metricLighting').textContent = analysis.lightingLabel;
      document.getElementById('metricLightingSub').textContent = analysis.lightingSub;
      document.getElementById('metricTone').textContent = analysis.toneLabel;
      document.getElementById('metricToneSub').textContent = analysis.toneSub;
      document.getElementById('metricContrast').textContent = analysis.contrastLabel;
      document.getElementById('metricContrastSub').textContent = analysis.contrastSub;
      document.getElementById('metricMusic').textContent = analysis.musicLabel;
      document.getElementById('metricMusicSub').textContent = analysis.musicSub;
    }

    function buildAutoBriefText(ev, items, analysis) {
      if (!analysis) {
        return `Unggah minimal 1 foto atau video inspirasi untuk sesi ${ev.name} supaya sistem bisa membaca karakter cahaya, warna, musik, dan menyusun brief lengkap otomatis.`;
      }

      const momentsList = ev.moments.map((m) => `- ${m}`).join('\n');
      const videoFrames = items.filter((it) => it.type === 'video' && it.timestamp);
      const videoFrameNote = videoFrames.length
        ? `Cuplikan adegan kunci dari video referensi (${videoFrames.map((v) => v.timestamp).join(', ')}) sudah otomatis masuk ke kolase moodboard sebagai patokan framing dan transisi shot.\n`
        : '';
      const songTitleNote = ev.videoSongTitle && ev.videoSongTitle.trim()
        ? `Lagu referensi di video: ${ev.videoSongTitle.trim()}\n`
        : '';
      const musicBlock = analysis.musicProfile
        ? `${songTitleNote}Konsep musik: ${analysis.musicProfile.concept}. ${analysis.musicProfile.desc}
Referensi lagu yang mirip nuansanya:
${analysis.musicProfile.songs.map((s) => `- ${s}`).join('\n')}`
        : `Lagu belum bisa diidentifikasi karena belum ada video yang diupload (unggah video referensi terlebih dahulu atau ketik judul lagu jika sudah ada).`;
      const angleFull = state.brideAngleNote && state.brideAngleNote.trim()
        ? `${state.brideAngle}. Catatan khusus: ${state.brideAngleNote.trim()}`
        : state.brideAngle;
      const extraNote = ev.customNote && ev.customNote.trim() ? `\n\n*Tambahan dari Kami:*\n${ev.customNote.trim()}` : '';

      return `Halo tim Fotografer, Videografer, dan WCC. Ini brief visual dan arahan liputan untuk acara *${ev.name}* ${state.globalCouple || 'kami'} ya.

Waktu: ${ev.dateTime || '-'}
Lokasi: ${ev.venue || '-'}
Kontak WO: ${state.globalWO || '-'}

*1. Karakter Visual & Palet Warna (Hasil Moodboard)*
Nuansa utamanya mengarah ke ${analysis.lightingLabel.toLowerCase()} dengan tone ${analysis.toneLabel.toLowerCase()} (${analysis.hueFamily.toLowerCase()}) dan kontras ${analysis.contrastLabel.toLowerCase()}.
Patokan warna dominan: ${analysis.hexPalette.map((h) => h.toUpperCase()).join(', ')}

*2. Catatan Cahaya & Warna*
${analysis.lightingGuidance}
${analysis.toneGuidance}

*3. Arahan Fotografer*
${analysis.photoArchetype} ${analysis.framingNote}

*4. Angle Wajah Bride (Mohon Diperhatikan Semua Tim)*
${angleFull}

*5. Arahan Videografer & Konsep Musik*
${videoFrameNote}${musicBlock}
Tolong rekam suara asli momen inti (doa, sungkeman, atau ijab kabul) secara penuh dan jernih. Hasil akhir: video teaser sekitar 1 menit plus video highlight 3-5 menit.

*6. Arahan Khusus WCC (Wedding Content Creator)*
- Fokus utama: ${state.wccFocus}
- Format: rekam vertikal 9:16 (stabil, 60fps jika perlu slow-mo), ikuti patokan warna dan cahaya yang sama dengan tim foto/video di atas.
- Pengiriman: kirim semua raw clips dan minimal 1-2 editan singkat pada H+1 atau H+2.

*7. Momen yang Wajib Ada*
${momentsList}

*8. Titipan Penting*
${ev.donts}${extraNote}`;
    }

    function renderBriefEditor(ev, items, analysis) {
      const editor = document.getElementById('briefEditor');
      const badge = document.getElementById('briefModeBadge');

      if (ev.manualBrief !== null && ev.manualBrief !== undefined) {
        editor.value = ev.manualBrief;
        badge.textContent = 'Diedit Manual (Tersimpan)';
        badge.className = 'inline-block rounded-full bg-[#1f1d1a] px-2 py-0.5 text-[10px] font-medium text-white';
      } else {
        editor.value = buildAutoBriefText(ev, items, analysis);
        badge.textContent = 'Otomatis dari Moodboard';
        badge.className = 'inline-block rounded-full bg-[#f2ece3] px-2 py-0.5 text-[10px] font-medium text-[#8c6d46]';
      }
    }

    function getActiveBriefText() {
      return document.getElementById('briefEditor').value;
    }


    const SHAZAM_ENDPOINT = '/api/detect-song';

    async function extractPcmBase64FromVideo(file) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return null;
        const arrayBuf = await file.slice(0, 10 * 1024 * 1024).arrayBuffer();
        const ctx = new AudioCtx();
        const audioBuf = await ctx.decodeAudioData(arrayBuf);
        await ctx.close();

        const targetRate = 44100;
        const sampleSec = Math.min(4, audioBuf.duration || 4);
        const frameCount = Math.floor(targetRate * sampleSec);
        const offline = new OfflineAudioContext(1, frameCount, targetRate);
        const srcNode = offline.createBufferSource();
        srcNode.buffer = audioBuf;
        srcNode.connect(offline.destination);
        srcNode.start(0, Math.min(2, Math.max(0, (audioBuf.duration || 0) * 0.15)), sampleSec);
        const rendered = await offline.startRendering();
        const ch = rendered.getChannelData(0);

        const pcm = new Int16Array(ch.length);
        for (let i = 0; i < ch.length; i++) {
          const s = Math.max(-1, Math.min(1, ch[i]));
          pcm[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }
        const bytes = new Uint8Array(pcm.buffer);
        let binary = '';
        const chunk = 0x8000;
        for (let i = 0; i < bytes.length; i += chunk) {
          binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
        }
        return btoa(binary);
      } catch (e) {
        return null;
      }
    }

    async function detectSongViaShazamProxy(file) {
      try {
        const base64Audio = await extractPcmBase64FromVideo(file);
        if (!base64Audio) return null;
        const res = await fetch(SHAZAM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: base64Audio
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (data && data.track && data.track.title) {
          const artist = data.track.subtitle || '';
          return artist ? `${data.track.title} - ${artist}` : data.track.title;
        }
        return null;
      } catch (e) {
        return null;
      }
    }

    // Analyze audio BPM + percussive transient ratio to distinguish orchestral/instrumental vs beat-driven songs
    async function analyzeVideoAudio(file) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return { bpm: null, isInstrumentalSmooth: false };
        const arrayBuf = await file.slice(0, 12 * 1024 * 1024).arrayBuffer();
        const ctx = new AudioCtx();
        const audioBuf = await ctx.decodeAudioData(arrayBuf);
        const raw = audioBuf.getChannelData(0);
        const sr = audioBuf.sampleRate;
        await ctx.close();

        const win = Math.floor(sr * 0.025);
        const energies = [];
        for (let i = 0; i < raw.length; i += win) {
          let sum = 0;
          const end = Math.min(i + win, raw.length);
          for (let j = i; j < end; j++) sum += raw[j] * raw[j];
          energies.push(sum / (end - i));
        }

        const avgE = energies.reduce((a, b) => a + b, 0) / (energies.length || 1);
        const peaks = [];
        let sharpSpikes = 0;
        for (let i = 1; i < energies.length - 1; i++) {
          if (energies[i] > avgE * 2.1 && energies[i] > energies[i - 1] * 1.6) sharpSpikes++;
          if (energies[i] > avgE * 1.45 && energies[i] > energies[i - 1] && energies[i] > energies[i + 1]) {
            if (!peaks.length || i - peaks[peaks.length - 1] > 10) peaks.push(i);
          }
        }

        const spikeDensity = sharpSpikes / ((energies.length * 0.025) || 1);
        // Orchestral/classical strings & piano have smooth sustained envelopes (low sharp drum spike density)
        const isInstrumentalSmooth = spikeDensity < 1.15;

        let bpm = null;
        if (peaks.length >= 4) {
          const intervals = [];
          for (let i = 1; i < peaks.length; i++) {
            const sec = (peaks[i] - peaks[i - 1]) * 0.025;
            let b = 60 / sec;
            while (b < 60) b *= 2;
            while (b > 150) b /= 2;
            intervals.push(b);
          }
          intervals.sort((a, b) => a - b);
          bpm = Math.round(intervals[Math.floor(intervals.length / 2)]);
        }

        return { bpm, isInstrumentalSmooth, spikeDensity };
      } catch (e) {
        return { bpm: null, isInstrumentalSmooth: false };
      }
    }

    function processImageFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = async () => {
            const maxDim = 1000;
            let w = img.width;
            let h = img.height;
            if (w > maxDim || h > maxDim) {
              const ratio = Math.min(maxDim / w, maxDim / h);
              w = Math.round(w * ratio);
              h = Math.round(h * ratio);
            }
            const c = document.createElement('canvas');
            c.width = w;
            c.height = h;
            c.getContext('2d').drawImage(img, 0, 0, w, h);
            const dataUrl = c.toDataURL('image/jpeg', 0.84);
            const metrics = await analyzeDataUrlMetrics(dataUrl);
            resolve({
              id: 'm_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
              type: 'image',
              name: file.name.replace(/\.[^.]+$/, ''),
              src: dataUrl,
              metrics
            });
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    function formatSec(sec) {
      const s = Math.max(0, Math.round(sec));
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
    }

    function processVideoFile(file) {
      return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.src = url;

        video.addEventListener('loadedmetadata', async () => {
          const duration = Math.max(1, video.duration || 4);
          const sampleRatios = [0.08, 0.22, 0.36, 0.50, 0.64, 0.78, 0.90];
          const timestamps = sampleRatios.map((r) => Math.min(duration - 0.1, duration * r));
          const candidates = [];

          const captureFrame = () => {
            const maxDim = 900;
            let w = video.videoWidth || 640;
            let h = video.videoHeight || 360;
            if (w > maxDim || h > maxDim) {
              const ratio = Math.min(maxDim / w, maxDim / h);
              w = Math.round(w * ratio);
              h = Math.round(h * ratio);
            }
            const c = document.createElement('canvas');
            c.width = w;
            c.height = h;
            c.getContext('2d').drawImage(video, 0, 0, w, h);
            return c;
          };

          for (const t of timestamps) {
            await new Promise((done) => {
              const onSeek = () => {
                video.removeEventListener('seeked', onSeek);
                const c = captureFrame();
                const px = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
                let lumSum = 0;
                const step = 32;
                for (let i = 0; i < px.length; i += step) {
                  lumSum += 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
                }
                const avgLum = lumSum / (px.length / step);
                candidates.push({ t, dataUrl: c.toDataURL('image/jpeg', 0.84), px, avgLum });
                done();
              };
              video.addEventListener('seeked', onSeek);
              video.currentTime = t;
            });
          }

          // Compute motion/change between consecutive frames & filter near-black frames
          let motionSum = 0;
          for (let i = 1; i < candidates.length; i++) {
            const a = candidates[i - 1].px;
            const b = candidates[i].px;
            let diff = 0;
            const step = 32;
            const len = Math.min(a.length, b.length);
            for (let j = 0; j < len; j += step) diff += Math.abs(a[j] - b[j]);
            candidates[i].delta = diff / (len / step);
            motionSum += candidates[i].delta;
          }
          if (candidates[0]) candidates[0].delta = 0;
          const motionScore = candidates.length > 1 ? motionSum / (candidates.length - 1) : 12;

          // Pick 3 distinct key-element frames: opening, peak scene change, closing
          const validFrames = candidates.filter((c) => c.avgLum > 22 && c.avgLum < 245);
          const pool = validFrames.length >= 3 ? validFrames : candidates;
          const picked = [];
          if (pool.length <= 3) {
            picked.push(...pool);
          } else {
            picked.push(pool[0]);
            let bestMid = pool[Math.floor(pool.length / 2)];
            let maxDelta = -1;
            for (let i = 1; i < pool.length - 1; i++) {
              if ((pool[i].delta || 0) > maxDelta) {
                maxDelta = pool[i].delta || 0;
                bestMid = pool[i];
              }
            }
            picked.push(bestMid);
            picked.push(pool[pool.length - 1]);
          }

          const audioInfo = await analyzeVideoAudio(file);
          const bpm = audioInfo.bpm;
          const isInstrumentalSmooth = audioInfo.isInstrumentalSmooth;
          const detectedSong = await detectSongViaShazamProxy(file);
          if (detectedSong) {
            getCurrentEvent().videoSongTitle = detectedSong;
            const autoMatch = await findSimilarSongsByTitle(detectedSong);
            if (autoMatch) getCurrentEvent().matchedMusic = autoMatch;
          }
          const baseName = file.name.replace(/\.[^.]+$/, '');
          const results = [];
          for (let i = 0; i < picked.length; i++) {
            const f = picked[i];
            const metrics = await analyzeDataUrlMetrics(f.dataUrl);
            results.push({
              id: 'v_' + Date.now() + '_' + i + '_' + Math.random().toString(36).slice(2, 5),
              type: 'video',
              name: `${baseName} (${formatSec(f.t)})`,
              timestamp: formatSec(f.t),
              src: f.dataUrl,
              motionScore,
              bpm,
              isInstrumentalSmooth,
              metrics
            });
          }
          URL.revokeObjectURL(url);
          resolve(results);
        });

        video.addEventListener('error', () => {
          URL.revokeObjectURL(url);
          resolve([]);
        });
      });
    }

    async function handleFiles(fileList) {
      const files = Array.from(fileList).filter((f) => f.type.startsWith('image/') || f.type.startsWith('video/'));
      if (!files.length) return;

      showToast(`Menganalisis ${files.length} file (visual & audio)...`);
      const items = getCurrentMedia();
      for (const f of files) {
        if (f.type.startsWith('video/')) {
          const frames = await processVideoFile(f);
          if (Array.isArray(frames)) frames.forEach((fr) => items.push(fr));
        } else {
          const res = await processImageFile(f);
          if (res) items.push(res);
        }
      }
      getCurrentEvent().customPalette = null;
      saveState();
      renderAll();
      showToast(`Analisis selesai! Kolase & brief ${getCurrentEvent().name} diperbarui.`);
    }

    function loadImageElement(src) {
      return new Promise((resolve) => {
        const im = new Image();
        im.onload = () => resolve(im);
        im.onerror = () => resolve(null);
        im.src = src;
      });
    }

    async function downloadCollagePNG() {
      const items = getCurrentMedia();
      const ev = getCurrentEvent();
      const analysis = computeAggregateAnalysis(items, ev);
      if (!items.length) {
        showToast('Unggah minimal 1 foto atau video terlebih dahulu.');
        return;
      }

      const cols = state.layout === 'masonry3' ? 3 : 2;
      const W = 1400;
      const pad = 56;
      const gap = 24;
      const headerH = 184;
      const colW = (W - pad * 2 - gap * (cols - 1)) / cols;

      const loaded = await Promise.all(items.map((item) => loadImageElement(item.src)));
      const valid = loaded.filter(Boolean);

      const colHeights = new Array(cols).fill(0);
      const placements = valid.map((im) => {
        let minCol = 0;
        for (let c = 1; c < cols; c++) {
          if (colHeights[c] < colHeights[minCol]) minCol = c;
        }
        const drawH = Math.round(colW * (im.height / im.width));
        const x = pad + minCol * (colW + gap);
        const y = pad + headerH + colHeights[minCol];
        colHeights[minCol] += drawH + gap;
        return { im, x, y, w: colW, h: drawH };
      });

      const maxColH = Math.max(...colHeights, 200);
      const H = pad * 2 + headerH + maxColH;

      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#faf8f5';
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = '#8c6d46';
      ctx.font = '600 18px Inter, sans-serif';
      ctx.fillText((state.globalCouple || 'MEMPELAI').toUpperCase(), pad, pad + 18);

      ctx.fillStyle = '#1f1d1a';
      ctx.font = '600 44px Georgia, serif';
      ctx.fillText(`Moodboard ${ev.name}`, pad, pad + 68);

      ctx.fillStyle = '#6b655e';
      ctx.font = '500 18px Inter, sans-serif';
      ctx.fillText(`${ev.dateTime || ''}  •  ${analysis.toneLabel}  •  ${analysis.lightingLabel}`, pad, pad + 102);

      let sx = pad;
      analysis.hexPalette.forEach((hex) => {
        ctx.fillStyle = hex;
        ctx.beginPath();
        ctx.arc(sx + 11, pad + 138, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#d6ccbe';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#6b655e';
        ctx.font = '500 14px monospace';
        ctx.fillText(hex.toUpperCase(), sx + 28, pad + 143);
        sx += 116;
      });

      ctx.strokeStyle = '#e8e1d7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pad, pad + 166);
      ctx.lineTo(W - pad, pad + 166);
      ctx.stroke();

      placements.forEach(({ im, x, y, w, h }) => {
        ctx.drawImage(im, x, y, w, h);
        ctx.strokeStyle = '#e8e1d7';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);
      });

      const link = document.createElement('a');
      link.download = `moodboard-${state.activeEvent}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Kolase PNG berhasil diunduh!');
    }

    async function downloadPDF() {
      if (!window.jspdf || !window.jspdf.jsPDF) {
        showToast('Pustaka PDF sedang dimuat, silakan coba beberapa detik lagi.');
        return;
      }

      const items = getCurrentMedia();
      const ev = getCurrentEvent();
      const analysis = computeAggregateAnalysis(items, ev);
      if (!items.length) {
        showToast('Unggah minimal 1 foto atau video terlebih dahulu.');
        return;
      }

      showToast('Menyiapkan file PDF...');

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageW = 210;
      const pageH = 297;
      const margin = 15;
      const contentW = pageW - margin * 2;

      doc.setFillColor(250, 248, 245);
      doc.rect(0, 0, pageW, pageH, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(140, 109, 70);
      doc.text((state.globalCouple || 'MEMPELAI').toUpperCase(), margin, 18);

      doc.setFont('times', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(31, 29, 26);
      doc.text(`Moodboard & Brief ${ev.name}`, margin, 27);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(107, 101, 94);
      doc.text(`${ev.dateTime || '-'}   |   ${ev.venue || '-'}`, margin, 33);

      let sx = margin;
      analysis.hexPalette.forEach((hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        doc.setFillColor(r, g, b);
        doc.circle(sx + 2.5, 41, 2.5, 'F');
        doc.setFont('courier', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(107, 101, 94);
        doc.text(hex.toUpperCase(), sx + 6.5, 42);
        sx += 26;
      });

      doc.setDrawColor(232, 225, 215);
      doc.line(margin, 47, pageW - margin, 47);

      const cols = state.layout === 'masonry3' ? 3 : 2;
      const gap = 5;
      const colW = (contentW - gap * (cols - 1)) / cols;
      const loaded = await Promise.all(items.map((item) => loadImageElement(item.src)));
      const valid = loaded.filter(Boolean);

      let colY = new Array(cols).fill(52);
      valid.forEach((im) => {
        let minCol = 0;
        for (let c = 1; c < cols; c++) {
          if (colY[c] < colY[minCol]) minCol = c;
        }
        const imgH = colW * (im.height / im.width);
        if (colY[minCol] + imgH > pageH - 18) {
          doc.addPage();
          doc.setFillColor(250, 248, 245);
          doc.rect(0, 0, pageW, pageH, 'F');
          colY = new Array(cols).fill(18);
          minCol = 0;
        }
        const x = margin + minCol * (colW + gap);
        const y = colY[minCol];
        doc.addImage(im, 'JPEG', x, y, colW, imgH);
        doc.setDrawColor(232, 225, 215);
        doc.rect(x, y, colW, imgH);
        colY[minCol] += imgH + gap;
      });

      doc.addPage();
      doc.setFillColor(250, 248, 245);
      doc.rect(0, 0, pageW, pageH, 'F');

      doc.setFont('times', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(31, 29, 26);
      doc.text(`Brief Tim Foto, Video & WCC (${ev.name})`, margin, 22);

      doc.setDrawColor(232, 225, 215);
      doc.line(margin, 26, pageW - margin, 26);

      const rawBrief = getActiveBriefText().replace(/\*/g, '');
      const lines = doc.splitTextToSize(rawBrief, contentW);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(31, 29, 26);

      let cursorY = 34;
      lines.forEach((line) => {
        if (cursorY > pageH - 18) {
          doc.addPage();
          doc.setFillColor(250, 248, 245);
          doc.rect(0, 0, pageW, pageH, 'F');
          cursorY = 20;
        }
        doc.text(line, margin, cursorY);
        cursorY += 5.2;
      });

      doc.save(`moodboard-brief-${state.activeEvent}.pdf`);
      showToast('File PDF berhasil diunduh!');
    }

    function copyBriefToClipboard() {
      const text = getActiveBriefText();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          () => showToast('Brief siap kirim disalin ke clipboard!'),
          () => fallbackCopy(text)
        );
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast('Brief siap kirim disalin ke clipboard!');
      } catch (e) {
        showToast('Silakan blok dan salin teks dari kotak brief.');
      }
      document.body.removeChild(ta);
    }

    // Listeners
    document.querySelectorAll('.event-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeEvent = btn.dataset.event;
        saveState();
        renderAll();
      });
    });

    document.querySelectorAll('.layout-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.layout = btn.dataset.layout;
        saveState();
        renderAll();
      });
    });

    document.getElementById('globalCouple').addEventListener('input', (e) => {
      state.globalCouple = e.target.value;
      saveState();
      renderAll();
    });

    document.getElementById('globalWO').addEventListener('input', (e) => {
      state.globalWO = e.target.value;
      saveState();
      renderAll();
    });

    document.getElementById('brideAngleSelect').addEventListener('change', (e) => {
      state.brideAngle = e.target.value;
      saveState();
      renderAll();
    });

    document.getElementById('brideAngleNote').addEventListener('input', (e) => {
      state.brideAngleNote = e.target.value;
      saveState();
      renderAll();
    });

    document.getElementById('wccFocusSelect').addEventListener('change', (e) => {
      state.wccFocus = e.target.value;
      saveState();
      renderAll();
    });

    document.getElementById('eventDateTime').addEventListener('input', (e) => {
      getCurrentEvent().dateTime = e.target.value;
      saveState();
      renderAll();
    });

    document.getElementById('eventVenue').addEventListener('input', (e) => {
      getCurrentEvent().venue = e.target.value;
      saveState();
      renderAll();
    });

    async function runSongLookup() {
      const ev = getCurrentEvent();
      const title = document.getElementById('videoSongTitle').value.trim();
      const statusEl = document.getElementById('songLookupStatus');
      if (!title) {
        ev.matchedMusic = null;
        statusEl.textContent = '';
        saveState();
        renderAll();
        return;
      }
      statusEl.textContent = 'Mencari konsep & lagu yang mirip...';
      const match = await findSimilarSongsByTitle(title);
      if (match) {
        ev.matchedMusic = match;
        statusEl.textContent = `Ketemu: ${match.concept}`;
        saveState();
        renderAll();
        showToast('Referensi lagu mirip berhasil diperbarui!');
      } else {
        statusEl.textContent = '';
      }
    }

    document.getElementById('btnLookupSong').addEventListener('click', runSongLookup);
    document.getElementById('videoSongTitle').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        runSongLookup();
      }
    });

    document.getElementById('videoSongTitle').addEventListener('input', (e) => {
      getCurrentEvent().videoSongTitle = e.target.value;
      if (!e.target.value.trim()) getCurrentEvent().matchedMusic = null;
      saveState();
      renderAll();
    });

    document.getElementById('customNoteInput').addEventListener('input', (e) => {
      getCurrentEvent().customNote = e.target.value;
      saveState();
      renderAll();
    });

    document.getElementById('briefEditor').addEventListener('input', (e) => {
      getCurrentEvent().manualBrief = e.target.value;
      const badge = document.getElementById('briefModeBadge');
      badge.textContent = 'Diedit Manual (Tersimpan)';
      badge.className = 'inline-block rounded-full bg-[#1f1d1a] px-2 py-0.5 text-[10px] font-medium text-white';
      saveState();
    });

    document.getElementById('btnResetBriefAuto').addEventListener('click', () => {
      getCurrentEvent().manualBrief = null;
      saveState();
      renderAll();
      showToast('Brief dibuat ulang otomatis dari moodboard!');
    });

    document.getElementById('mediaInput').addEventListener('change', (e) => {
      handleFiles(e.target.files);
      e.target.value = '';
    });

    const dropZone = document.getElementById('dropZone');
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('border-[#8c6d46]', 'bg-[#f2ece3]');
    });
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('border-[#8c6d46]', 'bg-[#f2ece3]');
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-[#8c6d46]', 'bg-[#f2ece3]');
      handleFiles(e.dataTransfer.files);
    });

    document.getElementById('btnClearMedia').addEventListener('click', () => {
      state.media[state.activeEvent] = [];
      getCurrentEvent().customPalette = null;
      saveState();
      renderAll();
      showToast('Media di sesi ini dikosongkan');
    });

    document.getElementById('btnResetSamples').addEventListener('click', async () => {
      state.media[state.activeEvent] = await buildSampleItems(state.activeEvent);
      getCurrentEvent().customPalette = null;
      saveState();
      renderAll();
      showToast('Contoh referensi dimuat ulang');
    });

    document.getElementById('btnReanalyze').addEventListener('click', () => {
      getCurrentEvent().customPalette = null;
      getCurrentEvent().manualBrief = null;
      saveState();
      renderAll();
      showToast('Visual & audio dianalisis ulang!');
    });

    document.getElementById('btnCopyWA').addEventListener('click', copyBriefToClipboard);
    document.getElementById('btnCopyWAPanel').addEventListener('click', copyBriefToClipboard);
    document.getElementById('btnDownloadPNG').addEventListener('click', downloadCollagePNG);
    document.getElementById('btnDownloadPDF').addEventListener('click', downloadPDF);

    initApp();
