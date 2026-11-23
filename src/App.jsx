import { useState } from 'react';

export default function App() {
  const [invite, setInvite] = useState('');
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice(invite.trim() ? 'Личные приглашения подключим на следующем этапе. Пока сайт находится в разработке ✨' : 'Вставь персональную ссылку или код приглашения.');
  }

  return (
    <main className="page-shell">
      <div className="snow snow-one">✳</div><div className="snow snow-two">✧</div><div className="snow snow-three">❄</div>
      <header className="topbar"><a className="brand" href="/" aria-label="Secret Santa Redstore"><span className="brand-mark">R</span><span>REDSTORE <i>·</i> SECRET SANTA</span></a><span className="season">HOLIDAY EDITION 2026</span></header>
      <section className="hero">
        <div className="eyebrow"><span></span> THE MOST WONDERFUL TIME OF THE YEAR <span></span></div>
        <div className="ornament" aria-hidden="true">✦</div>
        <h1>Тайный<br/><em>Санта</em></h1>
        <p className="intro">Маленькое чудо начинается с одного подарка.<br/>Давай сделаем этот праздник особенным.</p>
        <div className="divider"><span>✧</span></div>
        <form className="invite-card" onSubmit={handleSubmit}>
          <label htmlFor="invite">Уже получил(а) личное приглашение?</label>
          <p>Введи свой код или открой персональную ссылку, чтобы узнать, кому готовить подарок.</p>
          <div className="input-row"><input id="invite" value={invite} onChange={e => {setInvite(e.target.value); setNotice('');}} placeholder="Твой код приглашения" autoComplete="off"/><button type="submit" aria-label="Продолжить">→</button></div>
          {notice && <div className="notice" role="status">{notice}</div>}
        </form>
        <div className="bottom-note"><span>🎁</span> KEEP IT SECRET. MAKE IT MAGICAL. <span>🎁</span></div>
      </section>
      <footer><span>Made with <b>♥</b> for the Redstore team</span><span>YEREVAN · 2026</span></footer>
    </main>
  );
}
