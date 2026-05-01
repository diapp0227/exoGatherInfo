'use strict';

const EXO_SETLIST = [
  { n: '01', title: 'MAMA',                   vid: 'KH6ZwnqZ7Wo' },
  { n: '02', title: 'Monster',                vid: 'KSH-FVVtTf0' },
  { n: '03', title: 'Overdose',               vid: 'TI0DGvqKZTI' },
  { n: '04', title: 'Moonlight Shadows',      vid: 'MzgmGnNm3l4' },
  { n: '05', title: 'Gravity',                vid: 'NsubiQ0nGbE' },
  { n: '06', title: 'Jekyll',                 vid: 'FpoX3HJPZd8' },
  { n: '07', title: 'Crazy',                  vid: 'LHVF5UyKFwg' },
  { n: '08', title: 'PLAYBOY',                vid: 'e6AIFCuQR-E' },
  { n: '09', title: 'Artificial Love',        vid: 'c4_Pc4gZELo' },
  { n: '10', title: 'The Eve',                vid: 'gK8YC0nxNe0' },
  { n: '11', title: 'Love Shot',              vid: 'pSudEWBAYRE' },
  { n: '12', title: 'Power',                  vid: 'sGRv8ZBLuW0' },
  { n: '13', title: "Don't Fight the Feeling",vid: '2IkoKhr6Tss' },
  { n: '14', title: 'Run',                    vid: 'VgI8_hZFZJE' },
  { n: '15', title: 'Tempo',                  vid: 'iwd8N6K-sLk' },
  { n: '16', title: 'Ko Ko Bop',              vid: 'IdssuxDdqKk' },
  { n: '17', title: 'CALL ME BABY',           vid: 'yWfsla_Uh80' },
  { n: '18', title: 'LOVE ME RIGHT',          vid: 'RuqaVryDRd0' },
  { n: '19', title: 'Growl',                  vid: 'I3dezFzsNss' },
  { n: '20', title: "Baby Don't Cry",         vid: 'Qx1V-GRT0Fw' },
  { n: '21', title: 'Walk On Memories',       vid: 'E-UTLImG0ss' },
  { n: '22', title: "Don't Go",               vid: 'xtzi4jdpKhI' },
  { n: '23', title: 'EL DORADO',              vid: 'WhWNDc2_0Xo' },
  { n: '24', title: 'Back It Up',             vid: 'nGG42t7pm5Y' },
  { n: '25', title: 'Forever',                vid: 'iWsw98mCssg' },
  { n: '26', title: 'Crown',                  vid: 'BWfKkqo1Mk8' },
  { n: '27', title: 'Back Pocket',            vid: 'BCRbKttp5YY' },
  { n: '28', title: 'Paradise',               vid: 'yFbK03_tPaM' },
  { n: '29', title: 'Flatline',               vid: '2fGLkavJYA8', encore: true },
  { n: '30', title: 'Angel',                  vid: '9uSkhlKNKSY', encore: true },
];

const exoPlayer = (() => {
  let ytPlayer   = null;
  let currentIdx = 0;
  let ready      = false;

  /* ── セットリストをDOMに生成 ── */
  function buildSetlist() {
    const grid = document.getElementById('exo-setlist-grid');
    if (!grid) return;

    EXO_SETLIST.forEach((song, idx) => {
      const div = document.createElement('div');
      div.className = 'sl-item' + (song.encore ? ' sl-encore-song' : '');
      div.innerHTML =
        '<span class="sl-num">' + song.n + '</span>' +
        '<span class="sl-title">' + song.title +
        (song.encore ? ' <span class="sl-encore-badge">ENC</span>' : '') +
        '</span>';
      div.addEventListener('click', () => jumpTo(idx));
      grid.appendChild(div);
    });
  }

  /* ── ユーザーが「再生スタート」を押したとき ── */
  function init() {
    document.getElementById('player-init').style.display  = 'none';
    document.getElementById('player-active').style.display = 'block';

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }

  /* ── YouTube IFrame API が読み込まれたときに呼ばれるグローバル関数 ── */
  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player('yt-player', {
      videoId: EXO_SETLIST[currentIdx].vid,
      playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady(e)       { ready = true; e.target.playVideo(); updateUI(); },
        onStateChange(e) {
          if (e.data === YT.PlayerState.ENDED) next();
          updatePlayBtn();
        },
        onError()        { next(); }, // 埋め込み不可・地域制限→自動スキップ
      },
    });
  };

  /* ── 曲の読み込み ── */
  function loadAt(idx) {
    currentIdx = ((idx % EXO_SETLIST.length) + EXO_SETLIST.length) % EXO_SETLIST.length;
    if (ytPlayer && ready) ytPlayer.loadVideoById(EXO_SETLIST[currentIdx].vid);
    updateUI();
  }

  function prev()        { loadAt(currentIdx - 1); }
  function next()        { loadAt(currentIdx + 1); }
  function jumpTo(idx)   { loadAt(idx); }

  function togglePlay() {
    if (!ytPlayer || !ready) return;
    ytPlayer.getPlayerState() === YT.PlayerState.PLAYING
      ? ytPlayer.pauseVideo()
      : ytPlayer.playVideo();
  }

  /* ── UI 更新 ── */
  function updateUI() {
    const song = EXO_SETLIST[currentIdx];
    document.getElementById('player-num').textContent   = song.n;
    document.getElementById('player-title').textContent = song.title;

    document.querySelectorAll('#exo-setlist-grid .sl-item').forEach((el, i) => {
      el.classList.toggle('sl-playing', i === currentIdx);
    });

    const active = document.querySelector('#exo-setlist-grid .sl-playing');
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    updatePlayBtn();
  }

  function updatePlayBtn() {
    const btn = document.getElementById('btn-play-pause');
    if (!btn || !ytPlayer) return;
    const playing = ytPlayer.getPlayerState() === YT.PlayerState.PLAYING;
    btn.textContent = playing ? '⏸ Pause' : '▶ Play';
    btn.classList.toggle('player-btn-main', playing);
  }

  /* ── DOM 準備後にセットリスト生成 ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSetlist);
  } else {
    buildSetlist();
  }

  return { init, prev, next, jumpTo, togglePlay };
})();
