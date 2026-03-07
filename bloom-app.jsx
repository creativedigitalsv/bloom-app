import { useState } from "react";

const palette = {
  sage: "#7A9E7E",
  sageDark: "#5C7D60",
  sageLight: "#B8D4BA",
  sagePale: "#EAF2EB",
  teal: "#5F8A8B",
  tealLight: "#A8CCCF",
  terra: "#C27B5A",
  terraLight: "#E2A989",
  sand: "#E8D5BE",
  sandLight: "#F5EDE0",
  mustard: "#D4A833",
  mustardLight: "#F0CC6A",
  charcoal: "#2D3B2E",
  text: "#3A4A3C",
  muted: "#7A8C7B",
  white: "#FAFDF8",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,300&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: ${palette.sagePale};
    color: ${palette.text};
    min-height: 100vh;
  }

  .app {
    max-width: 420px;
    margin: 0 auto;
    background: ${palette.white};
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 60px rgba(0,0,0,0.12);
  }

  /* Header */
  .header {
    background: linear-gradient(145deg, ${palette.sage} 0%, ${palette.teal} 100%);
    padding: 48px 24px 32px;
    position: relative;
    overflow: hidden;
  }
  .header::before {
    content: '';
    position: absolute;
    width: 200px; height: 200px;
    background: rgba(255,255,255,0.07);
    border-radius: 50%;
    top: -60px; right: -40px;
  }
  .header::after {
    content: '';
    position: absolute;
    width: 120px; height: 120px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
    bottom: -20px; left: 30px;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    position: relative; z-index: 1;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .logo-text {
    font-family: 'Fraunces', serif;
    font-size: 17px;
    color: white;
    font-weight: 700;
    letter-spacing: -0.3px;
    line-height: 1.2;
  }
  .logo-text span {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    color: rgba(255,255,255,0.72);
    font-size: 10.5px;
    font-weight: 400;
    letter-spacing: 0.2px;
    margin-top: 1px;
  }
  .logo-baby {
    width: 52px; height: 52px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    filter: drop-shadow(0 3px 8px rgba(0,0,0,0.22));
    border-radius: 50%;
    overflow: hidden;
  }

  .mode-toggle {
    display: flex;
    background: rgba(255,255,255,0.18);
    border-radius: 20px;
    padding: 3px;
    gap: 2px;
  }
  .mode-btn {
    padding: 5px 12px;
    border-radius: 17px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    color: rgba(255,255,255,0.75);
    background: transparent;
    letter-spacing: 0.3px;
  }
  .mode-btn.active {
    background: white;
    color: ${palette.sageDark};
  }

  .week-display {
    position: relative; z-index: 1;
  }
  .week-label {
    font-size: 12px;
    color: rgba(255,255,255,0.7);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .week-number {
    font-family: 'Fraunces', serif;
    font-size: 52px;
    color: white;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 2px;
  }
  .week-sub {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    font-weight: 400;
  }
  .progress-bar-wrap {
    margin-top: 16px;
    background: rgba(255,255,255,0.2);
    border-radius: 6px;
    height: 6px;
  }
  .progress-bar {
    height: 6px;
    background: linear-gradient(90deg, ${palette.mustardLight}, ${palette.terraLight});
    border-radius: 6px;
    transition: width 0.6s ease;
  }
  .progress-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 10px;
    color: rgba(255,255,255,0.6);
  }

  /* Nav */
  .bottom-nav {
    position: sticky;
    bottom: 0;
    background: white;
    border-top: 1px solid ${palette.sageLight};
    display: flex;
    justify-content: space-around;
    padding: 10px 0 16px;
    z-index: 100;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.06);
  }
  .nav-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 12px;
    border-radius: 12px;
    transition: all 0.2s;
  }
  .nav-btn.active .nav-icon {
    background: ${palette.sagePale};
    color: ${palette.sage};
  }
  .nav-icon {
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 10px;
    font-size: 18px;
    transition: all 0.2s;
    color: ${palette.muted};
  }
  .nav-label {
    font-size: 10px;
    font-weight: 500;
    color: ${palette.muted};
  }
  .nav-btn.active .nav-label { color: ${palette.sage}; }

  /* Content area */
  .content {
    padding: 20px 20px 100px;
  }

  /* Cards */
  .card {
    background: white;
    border-radius: 20px;
    padding: 18px;
    margin-bottom: 14px;
    border: 1.5px solid ${palette.sageLight};
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .card:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(90,140,90,0.1); }

  .card-title {
    font-family: 'Fraunces', serif;
    font-size: 16px;
    font-weight: 500;
    color: ${palette.charcoal};
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Baby visual card */
  .baby-card {
    background: linear-gradient(135deg, ${palette.sandLight} 0%, ${palette.sageLight}44 100%);
    border: none;
    text-align: center;
    padding: 24px 18px;
  }
  .baby-emoji {
    font-size: 72px;
    display: block;
    margin-bottom: 12px;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  .baby-size-label {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    color: ${palette.charcoal};
    margin-bottom: 4px;
  }
  .baby-comparison {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: white;
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 13px;
    color: ${palette.terra};
    font-weight: 500;
    margin-top: 8px;
    border: 1px solid ${palette.terraLight};
  }
  .baby-stats {
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }
  .baby-stat {
    flex: 1;
    background: white;
    border-radius: 14px;
    padding: 10px;
    text-align: center;
  }
  .baby-stat-value {
    font-family: 'Fraunces', serif;
    font-size: 20px;
    color: ${palette.sage};
    font-weight: 500;
  }
  .baby-stat-unit {
    font-size: 10px;
    color: ${palette.muted};
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  /* Dad mode card */
  .dad-tip-card {
    background: linear-gradient(135deg, ${palette.terra}18 0%, ${palette.sand} 100%);
    border: 1.5px solid ${palette.terraLight};
  }
  .dad-tip-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }
  .dad-badge {
    background: ${palette.terra};
    color: white;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 10px;
  }
  .dad-tip-text {
    font-size: 14px;
    line-height: 1.6;
    color: ${palette.text};
  }
  .dad-tip-action {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 14px;
    padding: 12px;
    background: white;
    border-radius: 14px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .dad-tip-action:hover { background: ${palette.sandLight}; }
  .tip-action-icon {
    width: 36px; height: 36px;
    background: ${palette.terra};
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .tip-action-text { font-size: 13px; font-weight: 500; color: ${palette.charcoal}; }
  .tip-action-sub { font-size: 11px; color: ${palette.muted}; }

  /* Symptoms */
  .symptom-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }
  .chip {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
  }
  .chip-active {
    background: ${palette.sage}22;
    color: ${palette.sageDark};
    border: 1px solid ${palette.sage}44;
  }
  .chip-mild {
    background: ${palette.mustard}18;
    color: ${palette.mustard};
    border: 1px solid ${palette.mustard}33;
  }

  /* Shopping */
  .trimester-tabs {
    display: flex;
    gap: 6px;
    margin-bottom: 16px;
    background: ${palette.sagePale};
    padding: 4px;
    border-radius: 14px;
  }
  .trim-tab {
    flex: 1;
    padding: 7px 4px;
    border-radius: 10px;
    border: none;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    background: transparent;
    color: ${palette.muted};
  }
  .trim-tab.active {
    background: white;
    color: ${palette.sageDark};
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .shop-emoji { font-size: 26px; width: 40px; text-align: center; flex-shrink: 0; }
  .shop-name { font-size: 14px; font-weight: 600; color: ${palette.charcoal}; }
  .shop-why { font-size: 11px; color: ${palette.muted}; margin-top: 2px; line-height: 1.4; }
  .shop-priority {
    font-size: 10px; font-weight: 600; padding: 3px 8px;
    border-radius: 8px; letter-spacing: 0.5px; text-transform: uppercase; flex-shrink: 0;
  }
  .priority-high { background: ${palette.terra}18; color: ${palette.terra}; }
  .priority-soon { background: ${palette.mustard}18; color: ${palette.mustard}; }
  .priority-ok { background: ${palette.sage}18; color: ${palette.sage}; }

  /* Checklist */
  .checklist-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 11px 0;
    border-bottom: 1px solid ${palette.sagePale};
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .checklist-item.done { opacity: 0.5; }
  .checklist-item:last-child { border-bottom: none; }
  .checkbox {
    width: 22px; height: 22px;
    border-radius: 7px;
    border: 2px solid ${palette.sageLight};
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    transition: all 0.2s;
  }
  .checkbox.checked {
    background: ${palette.sage};
    border-color: ${palette.sage};
  }
  .check-text { font-size: 14px; color: ${palette.charcoal}; font-weight: 500; }
  .check-sub { font-size: 11px; color: ${palette.muted}; margin-top: 2px; }
  .check-text.done-text { text-decoration: line-through; color: ${palette.muted}; }
  .team-invite {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 14px;
    background: ${palette.sagePale};
    border-radius: 14px;
    border: 1.5px dashed ${palette.sageLight};
    cursor: pointer;
    font-size: 13px;
    color: ${palette.sage};
    font-weight: 500;
    margin-top: 8px;
  }

  /* Notification ping */
  .notif-banner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: ${palette.mustard}18;
    border-radius: 14px;
    border: 1px solid ${palette.mustard}33;
    margin-bottom: 14px;
  }
  .notif-dot {
    width: 8px; height: 8px;
    background: ${palette.mustard};
    border-radius: 50%;
    flex-shrink: 0;
    animation: pulse 1.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.3); }
  }
  .notif-text { font-size: 13px; color: ${palette.charcoal}; line-height: 1.4; }
  .notif-text strong { color: ${palette.terra}; }

  /* Section header */
  .section-heading {
    font-family: 'Fraunces', serif;
    font-size: 20px;
    color: ${palette.charcoal};
    font-weight: 500;
    margin-bottom: 16px;
    margin-top: 4px;
  }


  /* ── Photos ── */
  .photo-filter-bar {
    display: flex; gap: 7px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 16px;
    scrollbar-width: none;
  }
  .photo-filter-bar::-webkit-scrollbar { display: none; }
  .photo-filter-chip {
    padding: 6px 14px; border-radius: 20px; border: 1.5px solid ${palette.sageLight};
    font-size: 12px; font-weight: 600; cursor: pointer; white-space: nowrap;
    background: white; color: ${palette.muted}; transition: all 0.18s; flex-shrink: 0;
  }
  .photo-filter-chip.active { background: ${palette.sage}; border-color: ${palette.sage}; color: white; }

  .photo-timeline-label {
    font-family: 'Fraunces', serif; font-size: 15px; font-weight: 500;
    color: ${palette.charcoal}; margin: 16px 0 10px;
    display: flex; align-items: center; gap: 8px;
  }
  .photo-timeline-label::after {
    content: ''; flex: 1; height: 1px; background: ${palette.sageLight};
  }

  .photo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 6px; }
  .photo-grid.single { grid-template-columns: 1fr; }

  .photo-card {
    border-radius: 16px; overflow: hidden; position: relative;
    background: ${palette.sagePale}; cursor: pointer;
    border: 1.5px solid ${palette.sageLight};
    transition: transform 0.15s, box-shadow 0.15s;
    aspect-ratio: 3/4;
  }
  .photo-card:hover { transform: scale(1.02); box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
  .photo-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .photo-card-placeholder {
    width: 100%; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 6px;
    background: linear-gradient(145deg, ${palette.sagePale}, ${palette.sandLight});
  }
  .photo-placeholder-icon { font-size: 32px; opacity: 0.5; }
  .photo-placeholder-text { font-size: 11px; color: ${palette.muted}; font-weight: 500; text-align: center; padding: 0 8px; }
  .photo-badge {
    position: absolute; top: 8px; left: 8px;
    background: rgba(0,0,0,0.55); backdrop-filter: blur(4px);
    color: white; font-size: 10px; font-weight: 600;
    padding: 3px 8px; border-radius: 8px; letter-spacing: 0.3px;
  }
  .photo-badge.ultrasound { background: rgba(95,138,139,0.85); }
  .photo-badge.bump { background: rgba(122,158,126,0.85); }
  .photo-badge.birth { background: rgba(194,123,90,0.85); }
  .photo-badge.milestone { background: rgba(212,168,51,0.85); }
  .photo-heart {
    position: absolute; bottom: 8px; right: 8px;
    width: 28px; height: 28px; border-radius: 8px;
    background: rgba(255,255,255,0.85);
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; cursor: pointer;
  }
  .photo-caption {
    font-size: 11px; color: ${palette.muted}; margin-top: 5px;
    padding: 0 2px; line-height: 1.3; font-weight: 500;
  }

  /* Upload button */
  .add-photo-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%; padding: 14px;
    background: linear-gradient(135deg, ${palette.sage}22, ${palette.teal}22);
    border: 2px dashed ${palette.sage}88; border-radius: 16px;
    font-size: 14px; font-weight: 600; color: ${palette.sage};
    cursor: pointer; margin-bottom: 16px; transition: all 0.2s;
  }
  .add-photo-btn:hover { background: ${palette.sage}18; border-color: ${palette.sage}; }

  /* Add photo modal */
  .photo-modal-overlay {
    position: fixed; inset: 0; z-index: 999;
    background: rgba(0,0,0,0.6); display: flex;
    align-items: flex-end; justify-content: center;
    animation: fadeIn 0.2s ease;
  }
  .photo-modal {
    background: white; border-radius: 28px 28px 0 0;
    padding: 24px 24px 40px; width: 100%; max-width: 420px;
    animation: slideUp2 0.3s cubic-bezier(.22,.68,0,1.2);
  }
  .photo-modal h3 {
    font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600;
    color: ${palette.charcoal}; margin-bottom: 18px; text-align: center;
  }
  .photo-type-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 18px; }
  .photo-type-btn {
    padding: 14px 10px; border-radius: 16px;
    border: 2px solid ${palette.sageLight}; background: white;
    cursor: pointer; text-align: center; transition: all 0.18s;
  }
  .photo-type-btn:hover, .photo-type-btn.sel { border-color: ${palette.sage}; background: ${palette.sage}12; }
  .photo-type-icon { font-size: 28px; display: block; margin-bottom: 5px; }
  .photo-type-name { font-size: 12px; font-weight: 700; color: ${palette.charcoal}; }
  .photo-type-desc { font-size: 10px; color: ${palette.muted}; margin-top: 2px; line-height: 1.3; }

  .photo-meta-row { display: flex; gap: 8px; margin-bottom: 12px; }
  .photo-meta-input {
    flex: 1; padding: 10px 12px; border-radius: 12px;
    border: 1.5px solid ${palette.sageLight}; font-family: 'DM Sans', sans-serif;
    font-size: 13px; color: ${palette.charcoal}; outline: none; background: ${palette.sagePale};
  }
  .photo-meta-input:focus { border-color: ${palette.sage}; }

  .photo-upload-zone {
    border: 2px dashed ${palette.sageLight}; border-radius: 16px;
    padding: 24px; text-align: center; cursor: pointer;
    margin-bottom: 16px; transition: all 0.2s; background: ${palette.sagePale};
  }
  .photo-upload-zone:hover { border-color: ${palette.sage}; background: ${palette.sage}0A; }
  .photo-upload-zone input { display: none; }
  .photo-preview { width: 100%; border-radius: 12px; max-height: 180px; object-fit: cover; margin-bottom: 12px; }
  .photo-save-btn {
    width: 100%; padding: 14px; border-radius: 16px;
    background: linear-gradient(135deg, ${palette.sage}, ${palette.teal});
    color: white; border: none; font-family: 'Fraunces', serif;
    font-size: 16px; font-weight: 600; cursor: pointer; transition: opacity 0.15s;
  }
  .photo-save-btn:hover { opacity: 0.9; }
  .photo-cancel-btn {
    width: 100%; padding: 10px; border: none; background: none;
    font-size: 13px; color: ${palette.muted}; cursor: pointer; margin-top: 6px;
  }

  /* Lightbox */
  .lightbox {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,0.92); display: flex;
    flex-direction: column; align-items: center; justify-content: center;
    animation: fadeIn 0.2s ease; padding: 24px;
  }
  .lightbox img { max-width: 100%; max-height: 70vh; border-radius: 18px; object-fit: contain; }
  .lightbox-close {
    position: absolute; top: 20px; right: 20px;
    width: 38px; height: 38px; border-radius: 50%;
    background: rgba(255,255,255,0.15); border: none; color: white;
    font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center;
  }
  .lightbox-info { margin-top: 16px; text-align: center; }
  .lightbox-title { font-family: 'Fraunces', serif; font-size: 18px; color: white; font-weight: 500; }
  .lightbox-meta { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 4px; }
  .lightbox-emoji { font-size: 36px; max-width: 100%; max-height: 70vh; display: flex; align-items: center; justify-content: center; }

  /* Scrollable */
  .scroll-content { overflow-y: auto; }


  /* ── Shop item enhanced ── */
  .shop-item {
    padding: 14px 0;
    border-bottom: 1px solid ${palette.sagePale};
  }
  .shop-item:last-child { border-bottom: none; }
  .shop-item-top {
    display: flex; align-items: flex-start; gap: 12px;
  }
  .shop-item-body { flex: 1; min-width: 0; }
  .shop-item-bottom {
    display: flex; align-items: center; gap: 8px;
    margin-top: 10px; padding-left: 52px; flex-wrap: wrap;
  }
  .shop-assignee-row {
    display: flex; align-items: center; gap: 5px; flex-wrap: wrap;
  }
  .assignee-chip {
    display: flex; align-items: center; gap: 4px;
    padding: 4px 9px; border-radius: 20px;
    font-size: 11px; font-weight: 600; cursor: pointer;
    transition: all 0.15s; border: 1.5px solid transparent;
  }
  .assignee-chip.assigned { background: ${palette.sage}18; border-color: ${palette.sage}44; color: ${palette.sageDark}; }
  .assignee-chip.unassigned { background: ${palette.sagePale}; border-color: ${palette.sageLight}; color: ${palette.muted}; }
  .shop-link-chip {
    display: flex; align-items: center; gap: 4px;
    padding: 4px 9px; border-radius: 20px;
    font-size: 11px; font-weight: 500;
    background: ${palette.teal}12; border: 1.5px solid ${palette.teal}33;
    color: ${palette.teal}; cursor: pointer; text-decoration: none;
    transition: background 0.15s; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .shop-link-chip:hover { background: ${palette.teal}22; }
  .shop-add-link {
    display: flex; align-items: center; gap: 4px;
    padding: 4px 9px; border-radius: 20px;
    font-size: 11px; font-weight: 500;
    background: transparent; border: 1.5px dashed ${palette.sageLight};
    color: ${palette.muted}; cursor: pointer;
    transition: all 0.15s;
  }
  .shop-add-link:hover { border-color: ${palette.teal}; color: ${palette.teal}; }
  .shop-bought-btn {
    margin-left: auto; display: flex; align-items: center; gap: 4px;
    padding: 4px 10px; border-radius: 20px; border: none; cursor: pointer;
    font-size: 11px; font-weight: 600; transition: all 0.15s;
  }
  .shop-bought-btn.done { background: ${palette.sage}18; color: ${palette.sage}; }
  .shop-bought-btn.pending { background: ${palette.sand}; color: ${palette.muted}; }

  /* Item edit drawer */
  .item-edit-overlay {
    position: fixed; inset: 0; z-index: 998;
    background: rgba(0,0,0,0.45); display: flex;
    align-items: flex-end; justify-content: center;
    animation: fadeIn 0.2s ease;
  }
  .item-edit-drawer {
    background: white; border-radius: 24px 24px 0 0;
    padding: 20px 20px 36px; width: 100%; max-width: 420px;
    animation: slideUp2 0.28s cubic-bezier(.22,.68,0,1.2);
  }
  .item-edit-header {
    display: flex; align-items: center; gap: 12px; margin-bottom: 18px;
  }
  .item-edit-emoji { font-size: 32px; }
  .item-edit-name { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: ${palette.charcoal}; }
  .item-edit-section { font-size: 12px; font-weight: 700; color: ${palette.muted}; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; margin-top: 16px; }
  .assign-grid { display: flex; gap: 8px; flex-wrap: wrap; }
  .assign-member-btn {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    padding: 10px 14px; border-radius: 14px; cursor: pointer;
    border: 2px solid ${palette.sageLight}; background: white; transition: all 0.15s;
  }
  .assign-member-btn.selected { border-color: ${palette.sage}; background: ${palette.sage}12; }
  .assign-member-avatar { font-size: 22px; }
  .assign-member-name { font-size: 11px; font-weight: 600; color: ${palette.charcoal}; }
  .link-input-row { display: flex; gap: 8px; align-items: center; }
  .link-input {
    flex: 1; padding: 10px 12px; border-radius: 12px;
    border: 1.5px solid ${palette.sageLight}; font-family: 'DM Sans', sans-serif;
    font-size: 13px; color: ${palette.charcoal}; outline: none; background: ${palette.sagePale};
  }
  .link-input:focus { border-color: ${palette.teal}; }
  .item-save-btn {
    width: 100%; padding: 14px; border-radius: 16px; margin-top: 18px;
    background: linear-gradient(135deg, ${palette.sage}, ${palette.teal});
    color: white; border: none; font-family: 'Fraunces', serif;
    font-size: 16px; font-weight: 600; cursor: pointer;
  }


  /* ── Kick & Contraction ── */
  .track-section { margin-bottom: 20px; }
  .kick-btn {
    width: 160px; height: 160px; border-radius: 50%;
    background: linear-gradient(135deg, ${palette.sage}, ${palette.teal});
    border: none; cursor: pointer; display: flex; flex-direction: column;
    align-items: center; justify-content: center; margin: 0 auto;
    box-shadow: 0 8px 32px ${palette.sage}44;
    transition: transform 0.1s, box-shadow 0.1s;
    animation: float 4s ease-in-out infinite;
  }
  .kick-btn:active { transform: scale(0.93); box-shadow: 0 2px 12px ${palette.sage}33; }
  .kick-count-big { font-size: 52px; font-weight: 700; color: white; font-family: 'Fraunces', serif; line-height: 1; }
  .kick-label { font-size: 12px; color: rgba(255,255,255,0.85); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }
  .kick-progress { margin: 16px 0 8px; background: ${palette.sageLight}; border-radius: 8px; height: 8px; overflow: hidden; }
  .kick-fill { height: 8px; border-radius: 8px; background: linear-gradient(90deg, ${palette.sage}, ${palette.teal}); transition: width 0.4s; }
  .kick-history { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
  .kick-dot { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; border: 2px solid ${palette.sageLight}; }
  .kick-dot.done { background: ${palette.sage}; border-color: ${palette.sage}; }
  .contraction-btn {
    width: 100%; padding: 18px; border-radius: 18px; border: none; cursor: pointer;
    font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600;
    transition: all 0.2s; letter-spacing: 0.3px;
  }
  .contraction-btn.idle { background: ${palette.sand}; color: ${palette.charcoal}; }
  .contraction-btn.active { background: linear-gradient(135deg, ${palette.terra}, #E07A50); color: white; animation: pulse 1.5s ease-in-out infinite; }
  .contraction-item { display:flex; align-items:center; justify-content:space-between; padding: 10px 0; border-bottom: 1px solid ${palette.sagePale}; }
  .contraction-item:last-child { border-bottom: none; }
  .contraction-time-badge { background: ${palette.terra}18; color: ${palette.terra}; padding: 3px 10px; border-radius: 10px; font-size: 12px; font-weight: 600; }

  /* ── Notifications Modal ── */
  .notif-modal-overlay { position:fixed; inset:0; z-index:997; background:rgba(0,0,0,0.4); display:flex; align-items:flex-end; justify-content:center; animation: fadeIn 0.2s ease; }
  .notif-modal { background:white; border-radius:24px 24px 0 0; padding:24px 20px 40px; width:100%; max-width:420px; animation: slideUp2 0.28s cubic-bezier(.22,.68,0,1.2); }
  .notif-row { display:flex; align-items:center; padding:14px 0; border-bottom:1px solid ${palette.sagePale}; gap:14px; }
  .notif-row:last-child { border-bottom:none; }
  .notif-icon-badge { width:40px; height:40px; border-radius:12px; background:${palette.sagePale}; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
  .notif-toggle { width:46px; height:26px; border-radius:13px; border:none; cursor:pointer; position:relative; transition:background 0.2s; flex-shrink:0; }
  .notif-toggle-knob { position:absolute; top:3px; width:20px; height:20px; background:white; border-radius:50%; box-shadow:0 1px 4px rgba(0,0,0,0.2); transition:left 0.2s; }

  /* ── Invite Modal ── */
  .invite-modal-overlay { position:fixed; inset:0; z-index:997; background:rgba(0,0,0,0.4); display:flex; align-items:flex-end; justify-content:center; animation: fadeIn 0.2s; }
  .invite-modal { background:white; border-radius:24px 24px 0 0; padding:24px 20px 40px; width:100%; max-width:420px; animation: slideUp2 0.28s cubic-bezier(.22,.68,0,1.2); }
  .invite-code-box { background:${palette.sagePale}; border-radius:16px; padding:20px; text-align:center; margin:16px 0; }
  .invite-code { font-size:36px; font-weight:700; font-family:'Fraunces',serif; color:${palette.sageDark}; letter-spacing:8px; }
  .invite-step { display:flex; gap:12px; padding:12px 0; border-bottom:1px solid ${palette.sagePale}; align-items:flex-start; }
  .invite-step:last-child { border-bottom:none; }
  .invite-step-num { width:28px; height:28px; border-radius:50%; background:${palette.sage}; color:white; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; flex-shrink:0; }
  .copy-btn { width:100%; padding:14px; border-radius:14px; border:none; cursor:pointer; font-family:'Fraunces',serif; font-size:15px; font-weight:600; background:linear-gradient(135deg,${palette.sage},${palette.teal}); color:white; margin-top:8px; transition:opacity 0.15s; }
  .copy-btn:active { opacity:0.85; }



  /* ── Meet Parents ── */
  .meet-overlay { position:fixed; inset:0; z-index:999; background:${palette.white}; display:flex; flex-direction:column; animation: fadeIn 0.22s ease; }
  .meet-header { padding: 52px 20px 16px; background: linear-gradient(145deg, ${palette.sage} 0%, ${palette.teal} 100%); color:white; }
  .meet-card-stack { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 16px 20px; gap:0; position:relative; }
  .meet-card {
    width:100%; max-width:380px; background:white; border-radius:28px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.12); overflow:hidden;
    transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), opacity 0.3s;
  }
  .meet-card.swipe-left { transform: translateX(-120%) rotate(-18deg); opacity:0; }
  .meet-card.swipe-right { transform: translateX(120%) rotate(18deg); opacity:0; }
  .meet-card-avatar-block { background: linear-gradient(145deg, ${palette.sagePale} 0%, ${palette.teal}22 100%); padding: 36px 20px 24px; display:flex; flex-direction:column; align-items:center; gap:10; }
  .meet-card-avatar { width:90px; height:90px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; font-size:46px; box-shadow:0 4px 20px rgba(0,0,0,0.1); }
  .meet-card-name { font-family:'Fraunces',serif; font-size:22px; font-weight:700; color:${palette.charcoal}; }
  .meet-card-meta { display:flex; gap:8px; flex-wrap:wrap; justify-content:center; }
  .meet-badge { background:white; border-radius:20px; padding:4px 12px; font-size:12px; font-weight:600; color:${palette.text}; box-shadow:0 2px 8px rgba(0,0,0,0.08); }
  .meet-card-body { padding:20px; }
  .meet-card-bio { font-size:14px; color:${palette.text}; line-height:1.6; margin-bottom:16px; }
  .meet-looking { display:flex; gap:8px; flex-wrap:wrap; }
  .meet-looking-tag { padding:6px 14px; border-radius:20px; background:${palette.sagePale}; color:${palette.sageDark}; font-size:13px; font-weight:600; }
  .swipe-actions { display:flex; gap:20px; justify-content:center; padding: 16px 0 24px; }
  .swipe-btn { width:68px; height:68px; border-radius:50%; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:28px; transition: transform 0.15s, box-shadow 0.15s; box-shadow:0 4px 20px rgba(0,0,0,0.1); }
  .swipe-btn:active { transform:scale(0.88); }
  .swipe-btn.pass { background:white; }
  .swipe-btn.like { background: linear-gradient(135deg, ${palette.sage}, ${palette.teal}); }
  .swipe-count { text-align:center; font-size:12px; color:${palette.muted}; padding-bottom:8px; }
  /* Match screen */
  .match-overlay { position:fixed; inset:0; z-index:1001; background:linear-gradient(145deg,${palette.sage} 0%,${palette.teal} 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:32px; animation:fadeIn 0.3s ease; }
  .match-avatars { display:flex; gap:-16px; margin-bottom:24px; }
  .match-avatar { width:88px; height:88px; border-radius:50%; background:rgba(255,255,255,0.25); display:flex; align-items:center; justify-content:center; font-size:44px; border:3px solid white; margin:0 -8px; }
  .match-title { font-family:'Fraunces',serif; font-size:34px; font-weight:700; color:white; text-align:center; margin-bottom:8px; }
  .match-sub { font-size:15px; color:rgba(255,255,255,0.85); text-align:center; line-height:1.5; margin-bottom:32px; }
  .match-btn { width:100%; padding:16px; border-radius:18px; border:none; cursor:pointer; font-family:'Fraunces',serif; font-size:17px; font-weight:600; margin-bottom:12px; }
  .match-btn.primary { background:white; color:${palette.sageDark}; }
  .match-btn.secondary { background:rgba(255,255,255,0.2); color:white; }
  /* Onboarding */
  .ob-overlay { position:fixed; inset:0; z-index:1000; background:white; display:flex; flex-direction:column; animation:fadeIn 0.22s ease; }
  .ob-header { padding:52px 24px 20px; background: linear-gradient(145deg, ${palette.sage} 0%, ${palette.teal} 100%); }
  .ob-body { flex:1; padding:24px; overflow-y:auto; }
  .ob-label { font-size:12px; font-weight:700; color:${palette.muted}; letter-spacing:1px; text-transform:uppercase; margin-bottom:8px; margin-top:20px; }
  .ob-label:first-child { margin-top:0; }
  .ob-input { width:100%; padding:14px 16px; border-radius:14px; border:1.5px solid ${palette.sageLight}; font-family:'DM Sans',sans-serif; font-size:15px; color:${palette.charcoal}; outline:none; box-sizing:border-box; }
  .ob-input:focus { border-color:${palette.sage}; }
  .ob-textarea { width:100%; padding:14px 16px; border-radius:14px; border:1.5px solid ${palette.sageLight}; font-family:'DM Sans',sans-serif; font-size:15px; color:${palette.charcoal}; outline:none; resize:none; height:90px; box-sizing:border-box; }
  .ob-textarea:focus { border-color:${palette.sage}; }
  .ob-avatar-grid { display:flex; gap:12px; flex-wrap:wrap; }
  .ob-avatar-opt { width:56px; height:56px; border-radius:50%; background:${palette.sagePale}; display:flex; align-items:center; justify-content:center; font-size:28px; cursor:pointer; border:2.5px solid transparent; transition:all 0.15s; }
  .ob-avatar-opt.selected { border-color:${palette.sage}; background:${palette.sageLight}; transform:scale(1.1); }
  .ob-role-grid { display:flex; gap:10px; }
  .ob-role-opt { flex:1; padding:14px 8px; border-radius:16px; background:${palette.sagePale}; border:2px solid transparent; cursor:pointer; text-align:center; font-size:13px; font-weight:600; color:${palette.text}; transition:all 0.15s; }
  .ob-role-opt.selected { background:${palette.sage}; color:white; border-color:${palette.sage}; }
  .ob-looking-grid { display:flex; gap:10px; flex-wrap:wrap; }
  .ob-looking-opt { padding:10px 18px; border-radius:20px; background:${palette.sagePale}; border:2px solid transparent; cursor:pointer; font-size:14px; font-weight:600; color:${palette.text}; transition:all 0.15s; }
  .ob-looking-opt.selected { background:${palette.sage}; color:white; border-color:${palette.sage}; }
  .ob-progress { display:flex; gap:6px; margin-bottom:4px; }
  .ob-prog-dot { height:4px; border-radius:2px; flex:1; }
  .ob-footer { padding:16px 24px 40px; border-top:1px solid ${palette.sagePale}; }
  .ob-next-btn { width:100%; padding:16px; border-radius:18px; border:none; cursor:pointer; font-family:'Fraunces',serif; font-size:17px; font-weight:600; background:linear-gradient(135deg,${palette.sage},${palette.teal}); color:white; transition:opacity 0.15s; }
  .ob-next-btn:disabled { opacity:0.4; cursor:not-allowed; }
  /* Meet card on Home */
  .meet-home-card { background:linear-gradient(135deg,${palette.teal}18,${palette.sage}22); border:1.5px solid ${palette.teal}33; border-radius:20px; padding:18px; cursor:pointer; transition:transform 0.15s; }
  .meet-home-card:active { transform:scale(0.98); }

  /* ── Wishes ── */
  .wish-quick-btn {
    display: flex; flex-direction: column; align-items: center; gap: 5px;
    padding: 12px 8px;
    background: white;
    border: 1.5px solid ${palette.sageLight};
    border-radius: 16px;
    cursor: pointer;
    flex: 1;
    transition: all 0.18s;
  }
  .wish-quick-btn:hover { background: ${palette.sagePale}; transform: translateY(-2px); box-shadow: 0 4px 14px rgba(90,140,90,0.12); }
  .wish-quick-btn.selected { background: ${palette.sage}18; border-color: ${palette.sage}; }
  .wish-icon { font-size: 24px; }
  .wish-label { font-size: 11px; font-weight: 600; color: ${palette.charcoal}; text-align: center; line-height: 1.2; }

  .wish-bubble {
    display: flex; gap: 10px; align-items: flex-start;
    margin-bottom: 12px;
    animation: slideUp 0.25s ease;
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .wish-avatar { width: 32px; height: 32px; border-radius: 10px; background: ${palette.sagePale}; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; margin-top: 2px; }
  .wish-body { flex: 1; }
  .wish-sender { font-size: 11px; font-weight: 600; color: ${palette.muted}; margin-bottom: 4px; }
  .wish-text { background: ${palette.sagePale}; border-radius: 0 14px 14px 14px; padding: 10px 14px; font-size: 13px; color: ${palette.charcoal}; line-height: 1.5; display: inline-block; }
  .wish-bubble.mine { flex-direction: row-reverse; }
  .wish-bubble.mine .wish-text { background: linear-gradient(135deg, ${palette.sage} 0%, ${palette.teal} 100%); color: white; border-radius: 14px 0 14px 14px; }
  .wish-bubble.mine .wish-sender { text-align: right; }
  .wish-input-row {
    display: flex; gap: 8px; align-items: flex-end;
    position: sticky; bottom: 90px;
    background: white; padding: 12px 0 0;
    border-top: 1px solid ${palette.sageLight};
    margin-top: 8px;
  }
  .wish-input {
    flex: 1; padding: 11px 14px; border-radius: 22px;
    border: 1.5px solid ${palette.sageLight};
    font-family: 'DM Sans', sans-serif; font-size: 13px;
    color: ${palette.charcoal}; outline: none; resize: none;
    background: ${palette.sagePale};
    transition: border-color 0.2s;
  }
  .wish-input:focus { border-color: ${palette.sage}; }
  .wish-send-btn {
    width: 40px; height: 40px; border-radius: 14px;
    background: linear-gradient(135deg, ${palette.sage}, ${palette.teal});
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0; transition: transform 0.15s;
  }
  .wish-send-btn:hover { transform: scale(1.08); }

  /* ── Emergency ── */
  .sos-btn-wrap {
    display: flex; flex-direction: column; align-items: center;
    padding: 8px 0 4px;
  }
  .sos-btn {
    width: 88px; height: 88px; border-radius: 50%;
    background: linear-gradient(145deg, #E84040 0%, #C42020 100%);
    border: none; cursor: pointer;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2px;
    box-shadow: 0 0 0 0 rgba(232,64,64,0.4);
    transition: transform 0.15s;
    position: relative;
  }
  .sos-btn:hover { transform: scale(1.04); }
  .sos-btn.armed {
    animation: sosPulse 1.2s ease-in-out infinite;
  }
  @keyframes sosPulse {
    0%   { box-shadow: 0 0 0 0 rgba(232,64,64,0.6); }
    70%  { box-shadow: 0 0 0 22px rgba(232,64,64,0); }
    100% { box-shadow: 0 0 0 0 rgba(232,64,64,0); }
  }
  .sos-label { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 700; color: white; letter-spacing: 2px; }
  .sos-sub { font-size: 9px; color: rgba(255,255,255,0.8); font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }
  .sos-ring {
    position: absolute; inset: -8px; border-radius: 50%;
    border: 2px solid rgba(232,64,64,0.3);
    animation: sosRing 1.2s ease-in-out infinite;
  }
  @keyframes sosRing {
    0%   { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.35); opacity: 0; }
  }
  .sos-hint { font-size: 11px; color: ${palette.muted}; margin-top: 10px; text-align: center; line-height: 1.5; }

  /* SOS modal overlay */
  .sos-overlay {
    position: fixed; inset: 0; z-index: 999;
    background: rgba(0,0,0,0.55);
    display: flex; align-items: flex-end; justify-content: center;
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .sos-modal {
    background: white; border-radius: 28px 28px 0 0;
    padding: 24px 24px 40px; width: 100%; max-width: 420px;
    animation: slideUp2 0.3s cubic-bezier(.22,.68,0,1.2);
  }
  @keyframes slideUp2 {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }
  .sos-modal-title { font-family: 'Fraunces', serif; font-size: 22px; color: #C42020; font-weight: 700; margin-bottom: 6px; text-align: center; }
  .sos-modal-sub { font-size: 13px; color: ${palette.muted}; text-align: center; margin-bottom: 20px; line-height: 1.5; }
  .sos-contact-row {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 14px; border-radius: 14px;
    background: #FFF0F0; border: 1.5px solid #FFCCCC;
    margin-bottom: 8px;
  }
  .sos-contact-avatar { font-size: 20px; }
  .sos-contact-name { font-size: 14px; font-weight: 600; color: ${palette.charcoal}; }
  .sos-contact-num { font-size: 11px; color: ${palette.muted}; }
  .sos-alerted { margin-left: auto; font-size: 11px; font-weight: 600; color: #22aa55; }
  .sos-confirm-btn {
    width: 100%; padding: 16px; margin-top: 16px;
    background: linear-gradient(135deg, #E84040 0%, #C42020 100%);
    color: white; font-family: 'Fraunces', serif; font-size: 18px; font-weight: 700;
    border: none; border-radius: 18px; cursor: pointer;
    letter-spacing: 0.5px; transition: opacity 0.15s;
  }
  .sos-confirm-btn:hover { opacity: 0.92; }
  .sos-cancel-btn {
    width: 100%; padding: 12px; margin-top: 8px;
    background: none; border: none; font-size: 14px;
    color: ${palette.muted}; cursor: pointer; font-family: 'DM Sans', sans-serif;
  }
  .sos-sent-badge {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    padding: 14px; background: #E8F9EE; border-radius: 14px;
    margin-top: 12px; font-size: 14px; font-weight: 600; color: #22aa55;
  }

`;

const weekData = {
  week: 24,
  daysLeft: 112,
  totalDays: 280,
  babySize: "Corn on the Cob",
  dadComparison: "standard baseball bat (handle)",
  emoji: "🌽",
  length: "30 cm",
  weight: "600 g",
  symptoms: ["Back pain", "Heartburn", "Fatigue", "Round ligament pain"],
  dadTip: "Her back is working overtime this week carrying extra weight. A 3-minute lower back massage tonight can make a huge difference.",
};

const teamMembers = [
  { id: "sarah", name: "Sarah", avatar: "👩", role: "Mother" },
  { id: "james", name: "James", avatar: "👨", role: "Partner" },
  { id: "lisa",  name: "Grandma Lisa", avatar: "👵", role: "Team" },
];

const initialShoppingData = {
  1: [
    { id:"s1", emoji:"📚", name:"Pregnancy Books", why:"\"What to Expect\" + a dad-focused guide", priority:"soon", assignee:null, link:"", bought:false },
    { id:"s2", emoji:"🫚", name:"Morning Sickness Kit", why:"Ginger chews, vitamin B6, sea bands", priority:"high", assignee:"james", link:"", bought:false },
    { id:"s3", emoji:"👕", name:"Maternity Comfortables", why:"Loose pants & supportive bras early", priority:"ok", assignee:null, link:"", bought:false },
    { id:"s4", emoji:"💊", name:"Prenatal Vitamins", why:"Folic acid is critical in T1", priority:"high", assignee:"sarah", link:"https://www.amazon.com/s?k=prenatal+vitamins", bought:true },
  ],
  2: [
    { id:"s5", emoji:"🛒", name:"Stroller / Pram", why:"Compare all-terrain vs. lightweight city strollers", priority:"high", assignee:"james", link:"https://www.bugaboo.com", bought:false },
    { id:"s6", emoji:"🚗", name:"Car Seat", why:"Infant vs. convertible — buy once, use for years", priority:"high", assignee:null, link:"", bought:false },
    { id:"s7", emoji:"🛏", name:"Crib & Mattress", why:"Allow time for delivery & off-gassing", priority:"soon", assignee:"lisa", link:"https://www.ikea.com", bought:false },
    { id:"s8", emoji:"🍼", name:"Breast Pump", why:"Check insurance coverage first", priority:"ok", assignee:null, link:"", bought:false },
  ],
  3: [
    { id:"s9",  emoji:"🎒", name:"Hospital Bag", why:"Pack by Week 36: ID, clothes, snacks", priority:"high", assignee:"sarah", link:"", bought:false },
    { id:"s10", emoji:"🧷", name:"Newborn Diapers", why:"Sizes N & 1. Don't over-buy newborn.", priority:"soon", assignee:"james", link:"", bought:false },
    { id:"s11", emoji:"🤱", name:"Postpartum Care Kit", why:"Pads, sitz bath, nipple cream", priority:"high", assignee:null, link:"", bought:false },
    { id:"s12", emoji:"📋", name:"Baby Paperwork Folder", why:"Birth cert, SS card, insurance add", priority:"soon", assignee:null, link:"", bought:false },
  ],
};

const checklistData = [
  { id: 1, text: "Buy diapers (Sizes N & 1)", sub: "Added by Sarah · 2h ago", done: false },
  { id: 2, text: "Schedule hospital tour", sub: "Nursery Setup list", done: false },
  { id: 3, text: "Install car seat base", sub: "Dad's task · Due Week 36", done: false },
  { id: 4, text: "Order crib mattress", sub: "Completed by James · yesterday", done: true },
  { id: 5, text: "Write birth plan draft", sub: "Birth Prep list", done: false },
  { id: 6, text: "Freezer meals prep", sub: "Week 35–37 goal", done: false },
];


const mockParents = [
  { id:1, name:"Emma S.", avatar:"🤰", week:26, neighborhood:"Södermalm", looking:["☕ Coffee","💬 Chat"], bio:"First time mom, little nervous but so excited. Love slow mornings and good coffee.", liked:false },
  { id:2, name:"Lena & Max", avatar:"👫", week:22, neighborhood:"Vasastan", looking:["🚶 Walk","☕ Coffee"], bio:"Expecting our second. Would love to meet other parents nearby for weekend strolls.", liked:false },
  { id:3, name:"Sofia K.", avatar:"👩", week:30, neighborhood:"Östermalm", looking:["💬 Chat","☕ Coffee"], bio:"Yoga teacher on maternity leave. Into mindful parenting and connecting with real people.", liked:false },
  { id:4, name:"Amira J.", avatar:"🧕", week:18, neighborhood:"Norsborg", looking:["☕ Coffee","🚶 Walk"], bio:"Moved to Stockholm 2 years ago, building my village one parent at a time 🌍", liked:false },
  { id:5, name:"Petra & Tom", avatar:"💑", week:34, neighborhood:"Kungsholmen", looking:["🚶 Walk","💬 Chat"], bio:"Almost there! Looking to meet people before the chaos starts 😄", liked:false },
  { id:6, name:"Yasmin R.", avatar:"👩‍🦱", week:20, neighborhood:"Enskede", looking:["☕ Coffee"], bio:"Work from home, love a good fika. Baby due in summer, hoping to find my people!", liked:false },
];

const NavIcon = ({ tab, active }) => {
  const icons = { home: "🏡", baby: "🌱", shop: "🛍", track: "👶", team: "👥", wishes: "💌", photos: "📸" };
  const labels = { home: "Home", baby: "Growth", shop: "Shop", track: "Track", team: "Team", wishes: "Wishes", photos: "Photos" };
  return (
    <button className={`nav-btn ${active ? "active" : ""}`}>
      <div className="nav-icon">{icons[tab]}</div>
      <span className="nav-label">{labels[tab]}</span>
    </button>
  );
};

export default function BloomApp() {
  const [tab, setTab] = useState("home");
  const [mode, setMode] = useState("partner");
  const [trimester, setTrimester] = useState(2);
  const [checks, setChecks] = useState(checklistData);
  const [wishInput, setWishInput] = useState("");
  const [selectedQuick, setSelectedQuick] = useState(null);
  const [wishes, setWishes] = useState([
    { id: 1, from: "James", avatar: "👨", text: "Good morning love 💚 How are you feeling today?", mine: false },
    { id: 2, from: "You", avatar: "👩", text: "A little tired but okay! Baby was very active at night 🌙", mine: true },
    { id: 3, from: "Grandma Lisa", avatar: "👵", text: "Thinking of you both every day! Can't wait to meet the little one 🥰", mine: false },
  ]);
  const [sosOpen, setSosOpen] = useState(false);
  const [sosSent, setSosSent] = useState(false);
  const [sosArmed, setSosArmed] = useState(false);
  const [shopItems, setShopItems] = useState(initialShoppingData);
  const [editingItem, setEditingItem] = useState(null);
  const [editLink, setEditLink] = useState("");
  const [editAssignee, setEditAssignee] = useState(null);
  const [photoFilter, setPhotoFilter] = useState("All");
  // Editable week
  const [currentWeek, setCurrentWeek] = useState(24);
  const [editingWeek, setEditingWeek] = useState(false);
  const [weekInput, setWeekInput] = useState("24");
  // Notifications
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifSettings, setNotifSettings] = useState({ weeklyGrowth: true, teamActivity: true, appointments: true, kickReminder: false, dailyTip: true });
  // Partner onboarding
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteStep, setInviteStep] = useState(1);
  const [inviteCopied, setInviteCopied] = useState(false);
  const inviteCode = "B7X2K9";
  // Profile & onboarding
  const [profile, setProfile] = useState(null);
  const [onboarding, setOnboarding] = useState(false);
  const [obStep, setObStep] = useState(1);
  const [obName, setObName] = useState("");
  const [obRole, setObRole] = useState("Mother");
  const [obNeighborhood, setObNeighborhood] = useState("");
  const [obBio, setObBio] = useState("");
  const [obLooking, setObLooking] = useState([]);
  const [obAvatar, setObAvatar] = useState("🤰");
  // Meet / swipe
  const [meetOpen, setMeetOpen] = useState(false);
  const [parents, setParents] = useState(mockParents);
  const [swipeIdx, setSwipeIdx] = useState(0);
  const [swipeDir, setSwipeDir] = useState(null);
  const [matchedParent, setMatchedParent] = useState(null);
  const [swipeAnim, setSwipeAnim] = useState(false);
  // Kick counter
  const [kicks, setKicks] = useState([]);
  const [kickSessionStart, setKickSessionStart] = useState(null);
  const [kickGoal] = useState(10);
  // Contraction timer
  const [contractions, setContractions] = useState([]);
  const [contracting, setContracting] = useState(false);
  const [contractionStart, setContractionStart] = useState(null);
  const [contractionElapsed, setContractionElapsed] = useState(0);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [newPhotoType, setNewPhotoType] = useState(null);
  const [newPhotoWeek, setNewPhotoWeek] = useState("");
  const [newPhotoCaption, setNewPhotoCaption] = useState("");
  const [newPhotoPreview, setNewPhotoPreview] = useState(null);
  const [photos, setPhotos] = useState([
    { id:1, type:"Ultrasound", week:"Week 8", caption:"First heartbeat 💓", emoji:"🩻", date:"Oct 2024", liked:true },
    { id:2, type:"Ultrasound", week:"Week 12", caption:"NT scan — all perfect!", emoji:"🩻", date:"Dec 2024", liked:false },
    { id:3, type:"Bump", week:"Week 16", caption:"Starting to show! 🌸", emoji:"🤰", date:"Jan 2025", liked:true },
    { id:4, type:"Ultrasound", week:"Week 20", caption:"Anatomy scan — it's a girl! 💜", emoji:"🩻", date:"Feb 2025", liked:true },
    { id:5, type:"Bump", week:"Week 24", caption:"Feeling her kick every morning", emoji:"🤰", date:"Mar 2025", liked:false },
    { id:6, type:"Bump", week:"Week 28", caption:"Third trimester soon!", emoji:"🤰", date:"Apr 2025", liked:true },
  ]);
  const pct = Math.round((currentWeek / 40) * 100);

  const quickWishes = [
    { icon: "💆", label: "I need a massage", text: "My back is really sore today, could use a gentle massage 💆‍♀️" },
    { icon: "🍕", label: "Craving food!", text: "Major craving hitting — can you grab something on the way home? 🍕" },
    { icon: "🤗", label: "Need a hug", text: "Feeling a bit emotional today, just need a hug 🤗" },
    { icon: "😴", label: "Very tired", text: "So tired today — baby is draining all my energy 😴" },
    { icon: "🏥", label: "Feel unwell", text: "Not feeling great today, might need to call the midwife 🏥" },
    { icon: "💕", label: "Feeling great!", text: "Having a wonderful day! Baby is dancing and I feel amazing 💕" },
  ];

  const sendWish = (text) => {
    if (!text.trim()) return;
    setWishes(prev => [...prev, { id: Date.now(), from: "You", avatar: "👩", text: text.trim(), mine: true }]);
    setWishInput("");
    setSelectedQuick(null);
  };

  const updateShopItem = (trimester, id, patch) => {
    setShopItems(prev => ({
      ...prev,
      [trimester]: prev[trimester].map(i => i.id === id ? { ...i, ...patch } : i)
    }));
  };

  const saveItemEdit = () => {
    if (!editingItem) return;
    updateShopItem(editingItem.trim, editingItem.id, { link: editLink, assignee: editAssignee });
    setEditingItem(null);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setNewPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const savePhoto = () => {
    if (!newPhotoType) return;
    const newP = {
      id: Date.now(),
      type: newPhotoType,
      week: newPhotoWeek || "Week ?",
      caption: newPhotoCaption || newPhotoType + " photo",
      img: newPhotoPreview || null,
      emoji: newPhotoType === "Ultrasound" ? "🩻" : newPhotoType === "Bump" ? "🤰" : newPhotoType === "Birth" ? "👶" : "⭐",
      date: new Date().toLocaleDateString("en-GB", { month:"short", year:"numeric" }),
      liked: false,
    };
    setPhotos(prev => [...prev, newP]);
    setPhotoModalOpen(false);
    setNewPhotoType(null);
    setNewPhotoPreview(null);
    setNewPhotoWeek("");
    setNewPhotoCaption("");
    setTab("photos");
  };

  const toggleLike = (id) => setPhotos(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked } : p));

  const triggerSOS = () => {
    setSosArmed(true);
    setSosSent(true);
  };

  const toggle = (id) => setChecks(checks.map(c => c.id === id ? { ...c, done: !c.done } : c));

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        {/* Header */}
        <div className="header">
          <div className="header-top">
            <div className="logo">
              <div className="logo-baby">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAACER0lEQVR42tT9Z5AlV5bnif3uve7+VOjUCpnIBBJaoxRK62pZ3SN7ZjizazucXa4Ztdma8RPJD0vjB64ZjWOcJW25XE7vNkd1T2tZ1aK0AqqAgqhEJhJILUNHPOXi3sMP97o/fxEvIiNR1b3DgD1DZkbEE+7nHvE///M/6k43E6UU/kvQWgHl3y3386WUonwuEWH0vPf+ut+f38vzle/pfr/qv1M+z15+9l6f617P9Td1jd7P85TvfdJnUErt4bN5u3KicCgEBTii8o0oJeFx/xdq0od5vzf+p71Je339vRrZ/XyO+3nNnW7w38TXT3Mo64dpL+953NgVGgEEhwYg8k9aM1J+dgbwN3lR/zou/P14wns9x39o1+J/nPvrUApvesGAI+/1vHssvV/9yffyQpNu7Nbf2enm38/r/HUZ3L3e215/dzeDvZch3k8o/5s+4FvfW+n99nJ96+kdSrx7E41WtRDsf0iC85ORJxS1a65Xzwt+lvnb35h3U7W8RtR9e6xJN+Y/pLD503i0+zOu7Z9/5+sooFwIxooISmsuv6+CHap7erKfZZGx2/fvx8D3mmeJCKostuSnC887pdz3k9BM8p73SgHeT3j/aZ3FbsXdPfNDGeV6gitzwNILjBvpvarc9/vGf5bV614Ow/287vsJa7uFVBGpLuVO72/rv+/1537W3nZrtf7X583Hj2b0H0oI2C232auh3a9H2Ppz9+tJ/rqe+36v08+iWPrrLkp2+n60W8hQW/++ixHu1Xuo7RnBzyRJ/+s4IGrSO1WTQkrtGpQ/4kY/L/fpifb4g5Pv2c+oct+arlQRcKfnrtUFe3oPyufd0b0MZCv+s1fvM8mgJr0Z2SXE38vg6895Pxd714R7y40dfUuNDmWo02Ts/Un5G3vOCXe6ZnsxSrXFGPkZ58h7fh/lZ7gHIrJTihNNMswdDvj7/oDqfaCLP1OPtu0NCEorcFKZTHUBA0BaXQw1bjqq/tMT32OAtLSM2aOaaI1yn1dIqJVO/3+DF+5m3NHWD+NU+IilO91D9bQXl1t333Wfoe7TW937A457JVV1FlXNUamRexNBENCCRqGdq57BuSKYnCDO1l5Hau99BOf4aloAjVYxShSiAaWDk1KIEkTAKR1+RYMSFLJL/sgOlnx/Vfe9ruU9059dotv9GmJpDZGws1XsNeze84Pt8YzfC9DeDXtUE2K6qPEbJgIa5f9ToHCIEsAiRY5IjtgcEeufxzlvagJa3FhcDrZbe8HwKZULBm4QrUArRGnAoLRGmwhBo5UG3cApF2AJhbjxqnlUjarSr9Y84Xj+JXssVLTWe65y6w0yFQ6BYwesbw/1wbbish6CyxuqtL5npfW+E+efItTuZJwViF6FyHAxgmMSUSFsCUYLiEU5i7IF4jKctSixKHH+e8qBOETA6GBT4K+LKFAajfZGoL3RjJygVB5NyH04d+BQoAw4sAUQOqJog9IxSseIiYMhGUT57+vS0JTz3txtMTzeP1h8z8iyYzq23dhlT+9kvIGhtlXB4Zt7xaX+pnKH+6lXy+iqQnhDgcahpEBLgdgMcd7LIQUaR4R3Zbq6rDGouOoGKQn+xon3YgSPKVVT09+o8gCLDjdLozGUDXhxPvQa44JBgXUZ2KFniKgIpSOUiTAmQZRBlMHpCNDgVDBH/9hrRPmpYJmaC/xZgjv1O6uWBqnsBWR+vyDtXoHVvRrjuEeWKumvetlYb0zO521RMUDbIc45FIVvACkqA1KCD4fOG5Mt00MU6Gh0D5RGKePzuRCWpXSPwS/4kz3yxiK26jJJ6DBp56janSH/VDhwniHilEapCKU1YiKcmcKZOEA8qkJ3Qpb6U4Hou+Z9/GyNbpstiOCcGxUhf5NA80/z5sd/P4QDJRgE7RwaiyuGSJGCy4EccD73U7oqsFDaG4DSWG1QxoD4Q6i1CvmaCa+nUToO8bjkspVFR71CDd8Rh2ARZxFx/mKLw4mAdYgrcM6GbNTngBiFFh0KFueLHpsjKkPpCEyMiVooZXBKh7CuULvk4vdLJBmDzHa6FxO84dZwvad7GvJRtZzmVY21e571s8n1dstJdjXA8oJWngMUBu2zJpRLcUUfVwzRrsDgMCiscqDLq+a9mKBBh0pVRygTo7Xxf1a6FtK335AyGUdtaV8q2QmQ8c9UFjEISIE4iy0yxBWILcKThc+ldEjsC5S1KDSFMlg0KmqgoxZETaw4H6rHIJ2fzX3brRv1fp9v0j2OqiT7rwld2guQvZecoXqeAAArEYxyYIcU2RDlCjQpmgKtfbUrSoPTFVCrdITSCSZK0CZGqbgyOKGygRBOy4JmK0wycns7fyR/RUvIxv9d1/DDBB0pdNQOHtKCzbA2xxY5zhUocd6mtcLhUDh/jmyGtUOUbaOjJs6UnzNgm+FaOSc/9X27JwC+Q0Phvl5nJc3lXt7n/TIo7pcssBOdv/wJDShRIA5NgbV9KPpoyVEOjNJoXZqKqS6XNhE6bkEUI8oABhMo4d7gXMinDKhQtQaDcSis4MNnsFJXtkK23AFP8VIV9miU8t65unnekLxNmhH8MvY8FgkphLMZzlkEOwbAOMCJQlQMcRMVNzFEOBSF0mitsdZVkPr78Vi7QV4/jUfdVuT+j22AO73GVuBaiaCVQ7kCmw8oiiFaMhpaiDQ4B040SOSLh9hXlHHUHOVviMexJGCBwY3ZcFMLETIn5FawzpFbR+GEQiAXqcKcc25ip0grjSiFFiECjNZERhFrRWw0kVbEWhNrTahtq+Nlw3NrNQK4xVls3keKlCLPEQq09p7QifVFCxFCjIkaOJ0gSStAmKE6r1M932dr7q+DNFzBMSshB7yXV3o/BcZemdJ1A9z2HAhGFEpyxPaxtosSixFvlJGOQLwRCRFx0sJEDTAm5HvBHYnUQqngxFAIDApLP7MMLQyd9YYQKlYJBlU/CXXCgZQQTK1zJGUHDxnxEcQXR0opImVoGE1DC+3Y0Iw1iS4bgM57RCnBa8FgvVe0BXk+xBYp4DCIR2esoNBY0RQqRsdNdBQj2lBYFa6BbIWu7ysy/Szw3l1D8F4N8F6e8P3w8+qGt83VK0UkAsUQKbpgh2hl0cojcgaFcxoJVWLcaKNMgpPgiVAo57xxKEWOI7NCL0vpFZDnQu4E67zrUZFGianyYVF2HGxVWyqP8HfvTbX3jGoLeBtwRFWyr53vQWscGiE2kESaVmxoxzEN472jD84WMLjQ4lPicJKTpQNckROF/FGcL7QsCicaFSWouImoBo7Yt/+U3BdM9rMywHs5M7UaDNDtwFrZ68TbXouN+zFAg0XnAyTtolSBER9+vLcBEY1OWkSNFsrEQBS8kKCUNyQLDK1jmFk2M8vAOgoRXMDgRcKgjFIjowo3S4mrDoKw/SBW1XnNQKu2sIhvw5WfSdSWPoLCqQDcOEG7Aq0VzVjRiQ3TSUyiA5RdVdCuqnzEFuTDLs6mKFf4DFAJVhSWCKsUKmkh8TSuzDdDGqFVHa3cw30SuWeR8b7TtNIAd7JuuQ/ju59W0JZWZnUX/dSUoKzDZV3I+yQ4jFK+gBCHVaDihChuYeIWQmj2o4KnURTAILNsZDn93JEXUOD7syPjkTCdxWgeWsu2Xvj9eoq93pCxnEpAlGBF0GJpKGjHMdMNQyc2xPjiy7d6XDBqsC4lzwaQ9oiU835VLKKEQgwubqEa0yiVeOet6hV6MOsJOZ66T88n99mwUHsxQLWlyb3TRd2rAdZ7gFstUIV+rZIMiiEu93iexhFpQQVkz+oIEzdIkiYK43M0URU8kwtsZjlrWc4gcx7mVSbkdWoLx6+GMYYeuNLvD1TYqVLcU0SQEbzjyuvgJADojkZkmGsmzMQRSfDa3huacHAdeT6kGPbRklW9bVFQEOF0jEqaqKiBmKSWmyrcDsQEdZ/h9b7pdlt7wT9tx2IvoOdk9pwKB1swFLhhD5f3iFROZDwBQEThtEabJs1mB639KIurFQAZQjfN2RikdAuHlRhM04Mt4ip+nveQUnv10iLlPi79z6bDsyMigEJpgxLfnusXlmE3Yy1KmWvEzCQxMdrX9OHwJUmHWMfkaRdnMw/GK8GgKGxKkeVYZ1ENA8owCUl6v2FVuP+hs+qArk4oQvYCMN730NAOP6OVAisgGeQ9XNYnNoKmCPCEQekGcbNDFDdHzyQa0YLD0M1ylocZ/dwGNonH+vyHLD2bHfVgJ70nNWaS9987/SkNsHxeV+P++WpahyLKIZKDK5iONPubDTqNBI0bFUbhJttiQD7sgrUYBWBxSpGKQcUtdNzGEfmaW41oGFvzvjG4ZBdEY68GuGsIvh8DfD8UKjWRM+bBYC05Jt2Aoh+YIiEfUwYTtYiTaZROQh7vgplohk5YGgxZTTOURCgdk5cfTlwoQSJfL+vCwxy1gmLSxb2f3GcSdvl+ujwyERcN3lpCAaN8ruZTQEvkHNPNmIVWQjvSIZ/1d0wph3MFRdbH5pnvqihfuIgITjehMYuLG2PF59hn3qv3qxnhfbX2doNh7jfc7J6kh25Wbe5YVZ0NATugGG7QkJwIi1MSTmdE3GyRJNPBm3k2sVKKDMXGsGCll5PiEKMxTnswWqtK+kYpG0KU9iGY8TmO8qLoGgeSe8yw7KntWNUVo9dyIcfTpfZOWUlPiA6j1y1Bc98bdjJiqzssOKEB7OtEzLUSn0+JrRjgCsGmffKshxJLhEWKgpwIiVrQ6OBME6sEp/zPa6cmVr6TUqytLOz3M3r7126A1b9Xd0WjRYU+bg+b9jAuw+iy+6GwGHTSJmk0fZrqvPGhFH0rLHdTNnNHoSJfvSqHc2UhowIM4+cyxj6sUtvhpi2eWf0U4VQphXa+q+JpXWqMLeJbu7648BWprqY8duyxBvrJ+DX2oHohBi2gXcZUrDnYSehEpgLDCWxvm/XJsz7aFSgshfMFjCWBpANJk9w3OjGyPbfb0QC1rg7s/cwSj7GbfhYGeD/hWQGRWFQxoMh7ROLba+jAv9MRUaONiVqjkygKqw1rg4zl3pBCaWxgh2ilamRSPabuVXq9nVIKNSGEaK1/KlpG3RuUFWakNVrwpFTlRmmGjifCHuNPqJBJcxMB8/Me0mGcJVGOfe0mM604gNmuIrFKMaRI+7giD6Hdk2RzrVDxLJK0A164PRLcD6b7UxvgbjjO+9ELqf4t5CdGClQxwKabRDoQDEJrTEVN4lYbrWNEdBXEchR3e0PWBxarNGgT+ggusO896fNeuN3E0zs233H/NbAaaxr6221FMNYRNxugFYUtEPGcxCiJKfIclxcY7bE5qQxlBAuNBTo1ysnKORQl4JQKHlLQGqTw/fK5pmZ/u0EzQIc+agvOphRpgLgkBwqsdhSujUpmIOlgtU8XNIDbnZa6Gwa6Vxgq2itnbGufdrcXn9QZUQqMWB928wEmsJPRBhGDiVtEjalAyPS/45Rm6GBxs0cvd7gowYquhcpQlOjgKWpdd9mSSG/vMY8AwRKZKbsX9wVDqHofWGHFt8VcI+Hc5UtcuHKZlc01xFqmp6Z44NBRHj/zMDOtDjbLJiqSyZg3LfO+0chByf6uKlWtsSKeeWY0y1lGnuccmOowFXmqlkUwJiFpRWQILndosSjRxBTYbAOUI4pbFEqhAjOo4kbuMhO8W49/T2yYvXjASQa4ZwAafDO+6OGyDSIs2lq0jpDQQI8bHUTFFa6llGIzzbndGzDAADGiNU4cWvleqoRpoHqra9zryu5561i+E3BCrXd1g9ueJwwlec/nqoGor3znm7x67hz9LEUbQ1sZjNIorTm6/wA/94lPcnT/ftIsxZP0dcUAqtg2E9qcUs1ghdBaQjXijawC9HE0KDjQbjLbSMLAlfZhWXKPF+aZ955iAUumYkwyh4ubWGW2Ob/7GencynDasYlRN8CdvOFufd7tHo+KU6dklGCbok8xXEVTEKnA68OgYo/xKZ1QYEJIVqymBYvdPploxJShSkKxMmoh7VYQqR0Ogyq941i6E76jJ3nKWlHKeMvY53X+NawIuYE/+ouv8ub588x0Wpw9/SAPP/gw80mLu8tLvHLxAouLSyy02/ydL3+ZhXabLMsRHVUGWIdCRG0N9GrEbNlqEOXoZEBvjFi0WBY6DQ40E6KqT+4QySjSAUWWoSlQ5BQYrERErTmsaXvISlzJAt5T5NuxUzLhXik1QZpjr8KSe4PHA4ujyCDtkjgbhsAjrGiipEnc7ARk3nvYAlgfptztFziT+I5TOfpYeeIaiL2lxbdXUoS/1bY23ESga6mJn2Vyj7RM0RQ4RbvR4Ntv/Igfv3eBuXaHv/XpT/L844+hCt9ifuTBY5x+6EF++yt/ynvXb/CDN97k5z72MSSzIyGAsdFFtQ0nFCZVm2o0+F5CSwJOGYSI5V6OEcf+VhNd8d8bxEmEyCY293p9/nsZNl1HN2KcMcE7q1C9B6raHvO73cZ6qznlnZLH91f51kenfW6kXQbZBrYYeKq8iXABZombU54sGgaEFLAyGHK3O/QUJBee0wQsUY9j2WpLNburdp1UxeOo97qtKq7BJlseWw9W2VRReDUJrRWDLOWNt97CiPDZF1/gY48/hssK0swxzBz9jQFH52b4yPMvYIzh2o0bbA4ytEkmJ/uqnMZTNa+uRoNP4TOPqULUDqgKhAulDEvdjDv9AQUuVCaANsTNDjpu4iT2E4ICyma4bC0UKtqzr50n/f609KxtnTB+1l+ld8IRYSEfoIsBiSr8JxANOqbRnELpCHH4WVodsTJIWe6lZKqJJcbVnk/CWdzeyJcxo9lqJH4eV2rUKVWbIlZV2Ko/ZMJj1J1RFR1s9PMQN2Luri6z0t3kwPQsH3niMRIRLlx5j//u3/87bq8u00li1MAxNzWDiWJ66YAsz3atvnfW5/HvSgdwe3La4T2QA4q4wdIwZ3mQBlaRZySiIuJGBxW1QMdoNDGgsgEu7RIh6IqtrbcdSHHupzJEvQ2e2KPm8WSqvmCdgPPGJ9kAN+yhXO6hEx0hOqbZmgIdhVzFk0dXhhm3e32sjtFGB96fJ1K6YCwS8r6tnloF8qlG+RMsUnv4U/1Tn6sJhuDCbGthLUVRsLK+Ti9LOb7/AIc6HSKleP38Od6+c5NrG6tErQjT1ty4u0i31wvQgME6CyiPQdYFAmS8I1H/Xsk9rDy72l4w1iOTiMbpBiv9guV+htUKK16JQemYqOELD6eM7zhhIR+i8oFHL7akObqWr6qd3t+WxyT7ie7Zw71f0Fk0Wjm0HVBkXZQUiDZAAkoTN9roKMFZhzL+RC0PMu52BxRxCyWKWBxW1VRItiTnMhGD29kjewqWbIGKA86o2IPWtZ/rrbukEmg2WmOimHYrAgO5yzEhAhgM+6f3o+ObvH7+AgszUyyvd/mr738PBzz26KNMdVq4/hDBS3doXRYKnmxRN3YV2mU+t9IoUxMNEhfyRVUNzFcz0AhKLDhFrhPuDFOMUcw34lDoKOIoQTdapIMcTYTSzlO6hhuYxgxiWr7btNMmhR3w3510YSocsLTsSfjdJK9X9k23c/tGSK7GIsMBpkh9Vat9MmuSNiZu+7AbSAUbVlgeZOQ6Drw9PxAkZjyk1BkfVTOg5CuGZvtWIxqrbplsWNs1tLf3OlEKTRR4eN4jRY0YoyI2hn1u377D60srXLh+mXarw+LaGr0sI2m0eOmZp3n5/Hneevsc71x8F6dAtRp0pmaIopjFlRUWpqZoN2JfAuSWIrdoB1obhCKYlNkVTxsjfVDTyCm7ZaLCfXCkKG52e2gzw2wUeOOiMHGbxEE23ERrhS4KxKW4vIcxMYWKxyFyNfLa9+x4TNBzVIBaGWayrRU1AbvZ1lN1bkRjrxmgUoLKeqj+OonyAj4W0HGLpDMPEnmKuRJ6oriyPiB1lkjH4Vm8V/SnX42PFsr4eJcOgztSbXjazYvpSbyT0ckNfyzVDVRZZITqXBRYB0kjJsdx49Ztzl++xts3rnB3eYm03ydSis7sHEos//nPf5EPPHiK3BZcWr7L733j29xa3qA77NO1BVYbjFJMtdscmpvj0L59HD10iONHjjHbmsEIFJmlsENM5CdgRBxWyZio+jYA27oRyUGPqPfK6Yp9JMqnSbGG49MNpo0/iOW8ddpfQ4oBsThEHKkoVHMOaUxjZaejvLevCuMsDXBtmIvUkt17acRU6vJVhz0gd+EJtevj+mvEqkCjfH9RxyStadBxRTjIleLGRo+Nwn9woyOv31KfzdjqAWUnwHxkgHuBBCamEOX3tArHwBdHCk9/Mg2DMzHnL1/h5bfe4r2rN+ilAyIK9s/PcGr/Ph49dpJLd5f5zrlzPHTkAP/Lv/t3OJBEIBlWN1gcDFjv9bm1uMSFq9e4trzMzZUVNrIhSkckaPZNTXHy8HHOnDzJqZOnaDViijRDF36WI9dSQTYTOw7lEFYoUErpNBF/j6Rk2Ij3fG1jOTrTJlE2DPMbxKak/TWMy9ACBUJOjGnNYU1zorHtdWakCsfbCKk75H1bC5GxDx7EGBGFESESix0sod2A2HjcJLcRSXsGEzerG21VxO1ej9XMgokDV9Bso3hvE7WsGeF4mHVjBrjtAJUFb301gyrTgBq+SEW986wQMViEZivh7toa33zlh7z+zkW6gx6dRsyDhw/y4kMP8cjDD3JidoaEiDvdTf5Pv/7rXFvZ5LmHHuIffeFTnNo3g+Q5UWTCQHoCwHqacv7GLV45d443r9xgLU3RicEhNJzi0MI+njh7lkfOnGGhNYXNcnJn/QTfpKYAINZVee+4ATKCsJ0qaZVAzlwj4vBUQuw8oVcrocgGpIMNEuUQ5yjEYqMOUXM+4INqTBLkfnWwJXjCajB9LypWpYfyLl68ZETwgDEWlfWx6RqRtkRaB4JBh6Q1G3h4FtAspcLt/gCntRd/VGqECNV5aArq3BQlO1Xs42SELVnetstTdjH8EJOqD8IFgqzX/XPaoFsJb5x7m798+Qcsra/TSRIeP36ETz71JE8+eJJEGwSLsz1sOkTihNeuX+G/+a2vsNztcfzgfj793NN87rmn6GiLcnk4RwYTN9BxByHiyvI6f/7aq7xy8QKbRU4jbuFyh6QD5qdneOapJ3nm8SdpRYY8yzAmKLDWOseKUWdG6myf2gSfENqWAZ5C+5nrw1MJ+xtxdVqVWPLhJpL2Apsxx5KgG3OopElWU564bxJC/efuZYATSYTVWJ9DiU+PtRviBpsoN/DMKh0hKqLRmUPphFB50C8s1zcL+iQolVfNdlWjAtUTVR1CNmq7/s8YP44dGDAT8EOtAlyDGuO0+WrTS6VhYpyGP/3Ot3j13DlQirOHDvDLH/kQT504UXv+DEuKchlaCpxkmKjDxcUev/X1b3Lxxm3UoM9/8U/+Hg8fmUOyIU58P1YwOKfQJiGJ22BaXF5e5Y+/+zKvnL8MzTYqjsjTAXmWc+Lgfj79wQ/z8KnT5GlewVMjcc6dDTB8uJDnMaa+KlqTSMGpmZh2ZCg1W3E5aW8dJEeJ9TIlqolpTlOY1lhXZmu1e88OWgnjrWaFbGUF31M5s5zLxc+sRsrh0g1k2CXWFnQEKiZudjBJqzrxTmnubPZZzsAag6kGv9WYOHi97VXqhJcXbnJ6MFKf2l40jWfNJV6oAiO7/Cw2XJBCBBPFdPOM3/3Kn/KTq5fotDt84OwjfPTpJ5HhkMU7i6wNUgY2J5OMzKZo52jGhrlmg/nWNAcOHiCZmePOnbtMYXn64WPofAOXD6vArzFokUoSOFMRUTKFiqf4xhvn+O2vf5dlK7RaXvclL4QWhg889RQvvfgiCYqiyL2KQkniKFn8IedyzlVAuq42FJUFnYQhfgMUzEeO49MdtHKl1itF1idPu16iWIRMCnRjBpK5mmLNeOTai7JGhSGuZoXsBBTWk8eJIuPi8SVlc1y2RlQMiIxGVASmQdKaq4QVRRnW0oK7vZRMJ759tdtpCSDy9h4iE73dTisgtB5psFQhV0ZV7liP1QnOKPrW8hu//7u8e/sW7alpYqeYn55ibX2NXpp66pPxCb+2QdRSNGCJtMFoRZxoZjrTPHDwICfnZzky3+HBQ/Mcn2kRR1AMe2CdH7RqNrBO0CpC5QPydBPdXuDi4oBf/8o3ub2xCe02VilcUdAb9Hn82AN8+dOfYaHdIU1TD/RXoHsoNkJeXelMb13FG7ITF+6vKQoOtw3z7TiA+AawDLIVyDMiEZzk5CpBteZxujVyROxATr1XQbuaFVLH9nYNvROqykhyXNpDii6x8lp2YhLi1jTGNAO3TzMErq91GaKwOgnKpNsp8VV1JDuRW+8tlFP3gkaXjOlxerze0if20I+CxPBv/viPePW9yyStFulgQJ7nRCjmZqZYmJ3h4Pwcc1Md2u0WSRRjxA/8DPMhg36P1f6A1X7K4toGixvr2MzSiA2H52Z4+NB+nnroGM+dPspss8XV5S4/uPgeKxubtFzBYycP8fSZB1DZkDjpsGRb/H/+9Ou8eeMOcSdhbn6WldU1+hs9ju/fz698+rOc3HeAXjrAaq/0WskKjxngDl1Tp7ABodKuoK0ch+c6dPSI4FDYPkV/He0ylFKkTiFxG9OYJReFUxpzDwOcJJ7pnEOt5VZ2I6Xe0wCLPm64gVE5RolXp4pbmPa074qE4fHb/QGLwxzRBqcijKgwMlhTBkDGDIKJDIpRvrcTCbL+Xo0ah3JUTXFeyaiPYhU0pxr81Xde5s9f/j7W+IGfo/NzPHj6JI+fPM3BhX0kzSZaKworOCukWogEOhgapWy0hiwfst7vcW1pmSs37/DerRtcu3uHtc0ecax57MQxHj56ipffOseVpWUcPvx3YsXnn32CX/vMh4iKdRpRh2WX8C9++485v7jCoSNHefihh/jJufNsdDdZ6HT41U99lhOHDpGlWVBGkDHqmGwBEsbYRKKwYXWE19O2zDcijrablefUypEPVpGsV6aS5Bii1jy5TrBKY3ZiVe3FAPfM36/3FcIbluEapuhhTCBLkpA0Z5A4xpN8Inq55fp6jzRAM352Q2NE1ejINQPcYUhnRMWSeza4R9BKLZ90I46xKO0l31A4cTSmG7xz+Tq/+cd/DMrx/MNn+ORzT/PAwUMUwKV+n9vrPbq9IRt5QZ6H8KWFSCsiUURoImOIDCSJZqYRM99o0EkiCiy31hc5/+57XHjvGjfvrlCIYMVy9PBhHj95gvVeypsX36W3tsw/+tyH+dsf+4gfVY0SLi2v889/+0+4O7Q8/NijPH3mIb75g++zurHGnGnytz73RQ7vP8AwyzxAH9pzo7Jfb+vfjy0nrFHUIrEcm2oxHfvuj1YaVwzI+qsoyVHWUmAgmUYaM+SKsDlgQsfjHris+d/97/8P/8e9znmoLS0qbTNU3iciB+21lnXcJmp4zM8EWfA7vQGpBaWTCoiuFPoU29i/O62wqnMBJyHsSilMyPHGi406l9D3R2043VYBkWYzG/I7X/lTlrsbfPCRs/ynX/oCM50p3lla583b61xe73NnmLNhoReAdGUiImNQSYJqNqDZwCWGwkT0rWF1aLm13uXayiZ3N1NIpjhy7CRPPfok670BV+7e4tTRA/yv/8Gv8fxDD/PImRM45bh8a4m1fkoaRbx9/Q79YcbDx45xYHaGt969zPJmn6P7F3jkzBlu3rjD4toa7165yqkTp+g0mt5oatW9CkzsnYxgxM3zOtrWKQpnmWpEROKhM2U0hStwQf5Ygua1Ng0vlKl26AHvMifk5ep24pKWmN8WtKfEkiJxSJF6ddIALWmlg1hQhHIFojXdzDLIBTHJlr28UpvhkAlNbRmV6kpX4bc+JyFS7uiQ8EH87xg1olyVMrn1nWYKiJVGsKTOopodvvaN73LxylUeOHyQX/30p1hJC75z+TK3raXfyyj6Q3q9HhuDLv10gM1znGi0NiRxTCOO0TFMz8wy3Z5hNmmTNNtIZ4oMSHNhdaPArazTbkWsDTJsUfC5Fz7E/kaT71z4CZk4Fg7sY2F+lk2r+Vdf/TaOjJlGzONHjvN3P/9JPnH2NH9y/iqvvvkWn/joh3n2uSf5xre+z62VVX7/r77KP/jFL9PA+FFWrVB4ud8gj1gRHSZFNxeGnRSKblrQzQoWYo1IAUoTNdpktsCJxagCEYvNB0SmQVHNbddCsBpxLCep5Hsywk4l8j1CnCEnzQZo44eaQRNFDYwJ2YDyY0fr6YACgxuNS4y/yV1D//be9HYmjL+yJZ93u3yubOvyqADGijii2HBrZZVXXn8TpWOeffZZri6v8LXvv8rlQY9unuN6m7g8w1qLcwWR1jRMjDERzgipKLomJlcOe/kSznl2SafdYWZ+jrl9+5nfd4hmq4OoiIFLWR10mZ+Z5oFDh7i9vsqmzWm22ljriGOFFMJDp08Tx5qVtTVevbEKX/lLfv6jL/Kdd69y7dYib73zHo88eobnnn6S73//h1y6fpXv/OgVvvjSx3Bp7vOsUpzzXioPYx0oQGlWeynT81NEQRbZ6BitGziXESkvEW9dhrgUpZsVY3qcKbx7dI12gjKM0ZPfs+ClH+wQrQpU0LhTKkJHzRr4qelnBb3MIirelpPtPCxU8j7VjmJGIyk3NfJusjslqM5Z8xtD/E2JkpjXXv8em70+M3Mz/ODcOf7wa18jG/ZI4ib7Z+Y4Nj/Lgblp9i/MsjDToRMntExCbBQ6iXnr+hJ/9MqrNJzjsaP7yfKM62srrCwucevmNYiazO1b4MDhwxw/fpKj+/cz02zQGxgScT5vSyJyZzGR4emnHkcrw779CxgTsba2xndeeZPX37vCC6cP8dLpw/zr773Fu5evc/zoEY4cPMDjjz3MW+ff4dW33uSxUw/y8JHDDNPM41BBQetecz2VIWq/gaBXpKynGfuTpAodUdygsENEFYECVnhb0DFO1H3PtUa7U5tl63Cgp8XbAskGXt0gMIOVjn33I7j6QsFamlIoIRoTRNQjudydtFlktM1ym6csn0gLWhRjQ70io8n+naUGUAoaQBK3WBuknH/3PVozU2RFweUrN9g/1+aFM0d5+sRJHj56iIP7p5lKmr7KD6JJ5f9cNMVXf/AGvc0un3jqDP/J5z9GkfZZ2uxy6e4SP7l8l8s3V7ixvsjFzSVWbt2id+QEsdNoldDtpSTTsccgFWAtB/YtIFKQpn0K62i3Yg7MznHu2hXu3LrNC2cf4K/efI/F1WWW76wwc/wwjzx2ho1Bnzs3l/j2qz/k1JGfx2ivQpGXYcdtFx+apNkiYRhKtGZzmDPfSDChPWmiGDGNsMjRSw/bIoW4BZRGGHAGcTsR5icbYLnIbufwqMIsae4lwJTvejgiIlMq0PsP28st3cwhxoTRxXv3mtVotaVXLp2YNKsqt6tWctUoVFtL/m0YZzBYU0Cjobl67TqbNkVpmFOaX3jpY3z4+Ud5YM6Q5AOcpGRqEzsYBIkQW7FLokaTCzfu8PqVqxyc7/BLH3qKxnAJk6WcnF/g5KF5PvXUWdY3evzk5irfuniJd27c4dx7b9CemSOzwru37nJ29jTWKVTkc7RhkYXtnF52ThWatJ+GnNhyuNPg2ZMH+fMLl7lz9y4PnTxCbODJh87QXety/c5tXrvwNi88/iRZP2WrsvC9pyrCFlFt6BdCr3BMRxpxglYaHcW4wvjVEeQ4l4HNUVE8eZNN/Z5ssYNoL6NzjM3xOJzNwt4KwYlCGYOJgxK9OKxSbAxzcom8jFptfkHY/fXunYmWWGGYCS6rPDeuKKC13oGw6ckgw9ihIse7N65iVc6Zg4f5Z5/7AicW5kD6DHu3SCn8vEWp4KBGdbUDlG5wbfE6S/01PnX6UY52GthBH9We4/zNFS4t3mKq0+aZU6f5yKOnef7sg1y9s8p33r7AD9+9RmbgravvcfTB4z5Xc873ojUV0bbRbHDn9hrXF+/SnG5w/PgRmtbx1APH+dHtJTYHPQo7pGEjDs7McuLYUd6++A4/eP0NHj59lmascUW+5/GfEFw8IUMrcnGsDzI6081q34+OYtC60kFS4rc6EQXRzD1yCmCLMsI2Y6gfHR2Yxw5cUQQQWYdZBr9lyM+kKlIRBrn1O8+cBlVsWXw3Pv44/h5qNHs1IqHWq2eN3wmiZDSuSU1palTZyUiBNHy+XASn/WB7rz/gyt3bSJHzuSef5sTCHLbo42zXr//Sfngncl6w3Clb3Uh/IXM2h2s4LLPT0z4cJQl//vo7/ObXfsDKYICJIl48fYX/6Oc+wcGm8PC+KR7+9Cd54exd/ps/+3OuLt3l8uJtkqmYLM/ROkYrhUliijzj+uWbnDt/DRclaBdzdWmDFw4d4OGDESf3LXB5M2dlvcvRg/uw1nHk2CHevX6F26trvHb+Ah968klwhX/begTDb92uNAbgl4aGxmkY5AWZCM2yoNHeCxY299uqlKVwKdpO+QHHcJ12Wx1WHx8NaZyqD5ONUaIQLxmrUWAtSoZeeUppRGlM3PCeLtC+B1lOZh1jS5a1Gk14yd7Irzs2tKtyenw+ZLuylQ4YWNjbixDFEa6ZQKvN7bVNri0uMRO3ePDAgRAiXGjhxcHYShSx/ufyy9IwCSrXrHSHZDrC6YQfnr9Ar4DPfOglHj19mh9dvcGf/PBNXDJN5lJsb4knju3jyVOH2dzY4PWfnMeF6zVMUxZX1nn74jW+9cO3+PG580iWMz/VJmq1+fqFa/zVlSUW9u3j1Pw0RZazsraJ1hGpK5iaaTIzP03fFrz29jm6aYqIDr3qEYVqEt46msRTPh91Xt44E0UvK2rhUxGZJqh4tMbCFUF9gSDAtLfx3mhPXZBQRRkB6/JArQrdBB1hoka1QNSi2BymXqVdE5Y+q5A/qPsyNM81dOPMmJIqr2TUw52wY0SFASKFxiqHMwLGcPHKZc5duczq2gabvT7DzHJkYYa5+Tn/5LZAifU0MGW8fPC2CdYwtGxhYWaOho545/I1VvvPcaiV8Pc+8ym+sJnywiNnef3mLf5vv/3HXLpxi0GeM6UjnB1SFGu8+PBJvvGDV7l26y759zy+1h8OGeaFRw6iiKnpOU4fOMJDjzzKuffOc/6d8/z+j89xYGGOIwcPoS9cZ2N9w0NEZOTOsHBgP1ev3+HO4h2u3bnJw8cfQDLL9nOsJg6Q1xeMeckP6A5z5pIYo3x+rqMIpc3IsB2ITdFRA+dMbVP97vd6b+JEAfNRLkfsEEOptQeRiSnb/QIMCsewcJ4DWN2s+5iq207+CvIQ/lV02N02PgNbD+1UUhLKz2hilOc+/+43/5JXfvI22eYAJRB1fGdm3/QMjciASxGb+pxGCeNF3Nb5F0dR9Hn4xAIPHpnh4t1V/viV1/knn/koDx014eB4sFm0IjJCQ/JQ7TpsusETx+b52JOP8GevvM3N4QBjNHESobSi0UqY27ePD3/ww7RNkyyHR84+y/L6Jot3b/AHP/gRH3j6KZqdBuvDlE2bgxGsdczNzTEzO8PK7SUuvPcuj5w8hVPF5Nni3XbCVRdYMygK+oVjOi6pc4I2hiL3tmFCbWCkQCQKjOl7Vz7RTiyS0Z0tZwhAJPNyuspvaVQYoiipBlpQimHhKIjGsrxJucBeDFLcXmVCVOUppWopBUkyDc5E/MHXvsbL596iEce88NRjnDlyhJcvv8vb77zHwtQsMVAUfX+K1ajqmoyFBqaJE/Y3DV/8wPNc/eO/4itvXGTTCZ94/Az72lMsbnT5w++9znCYcfzAcWKjyG2KwQ/oS9rnlz/2AY7vP4Ayik6nyezMLK+9c5m/fO0nrKqIK5eucOb0IwxzS9yIeOTBRxh0B1zrr5L/5DzOGPq9AeuDAdPtJgZNHMfMLSywvLjC5evX6Q0HTJkk7Lur531la3NLi1Nq2Gq4vpnS9AvHVByhlT9gURRjC+MPM5ZcMpTN0SoKzYl7sJXAd7Bktzq0VGISwdkMKPyElvXVr9YNREVB408YpLnvrwZ1Tg9q7gQp6y2nrybtURsvHPV11YhKXzO6sT5kTT1InNBoNPjBxXd55fw7zMYtfuWlD/GFZ58lAi7duQ4C81OzgZo0BPLQuNdeHqQaLC7CCgcdCKAajcMOM1569EFWez1+5+XX+avXzvH6+ctMt5ss91I2+0MenG/yqWefwIVN7aISr4FIxsGm4xc/+IRvIFjvIZ86/hLzMzP8/ne+z4/ffJXcZjx29nGyPMeZNgeOP8qVd17j5krXX+vCYfOMiGmcFCSRYW5ulnarxWDQZ2V1jdnDR3FZNkb8HWnh1FZ5STmY4Lc7iYyk4dK8wDWjkU6PNr5QK1wgwVpcUaBjFbRpdh4KK/8UWWRb8q6UGh8CEgkq7RbtbLBwUEYH0W9/YlJbhl8T1N3dNnJrnVYlYmvuXo15nFKVyc9ruBKeH+tNj/eV9Zbn9t/JRHj17XOILfjEk8/w888+i+3eYF0sq0srCIrZ6ZAuOItQABFKhCSJQCd+fNpl2GIYVqKK3/MbBMNJM37pg09w8uhhvvna29xeWaM7SNnXjPjggyf5hQ8/z/GZBi7veuwybGtHYpTLsb21sCk9NBSLTX7lhWdpY/lX336Fn1x4E60VDz30BL0CdHuBA4cf4tqVN2ioApfn2MzzGcV6Rdb5qTb7982zemeRm3fucPbYUTJXhHtT01IM96+aWgt/Hp/FUQgRA1swFEen/Awm9pvdlavk4pykRMqGgmd7rrk13YvqDfqd0ThP7RHnB3ZKS/CJ6Iien1pHLr5yUnLvSSlVaw+pLb3eajimkgaTCXnYuCiSVNCRvx6RiVjd6HJ7cQmdFzx39jQiXRQZqbX0BRqNBgfmZiqjjxygY9I45t0bi9xZ2QCtOXF4gbMHDiJpH3TqJUMk8mavBNcf8NzRfTx27KMsbfbJU6GdxCzMNCFLcemQWEXVgfXNIIVTiccZQ5upVD7M+qt87vknWUkL/uB7r/D6m2/SaR0gSmYY5APa+w/RXL1BunyDGDXCRbUiEmjFmunpDmtLK9y4eROefZpIK3+/wkCSKpnSUmXPZUypNm2qWvvTOkgLx1SiQ8fDoEwE+cgJOawXUL8HHlgZ4EjRfSet4uCmxaFs4SlM2v+rCWtQVdirO8xyLDVGLrsvsJF7/L2c11Ajm99DyVJrrGvF5qDHZn+AwjDdUKh0BdUwXLnbZWOYcmxunmP7D+II1X0cc3Po+I0//jo/vnSN3Fm0FvZ1Gnzusaf4pQ9/gATxPdCSV4hDK4cdbhApx9FEoxqx95qDLFwrXd3cMk+QsFh79MHcaLpNQz5c48sfeYaNzTX+4s2L/OiHP+DY6aegM8vQGg4ePc3V7ho2T1FawiyHItLaD713WiSNhPX1TTb6A1qNGGtHeJ/bWshNKkCqAO3vxTDNcYmpCCCiI9+MwKC08zMozoYCcIKvmEBsGbt5Yw38gIibMZwn6HnW1tsr5S/uwNptQ9P35l9MZsZUOUMIDZXw0D0KkrpkmThHnCTEcYS1zgtBUtCzEd98/W2Gg5SnTp/iYKeDKwYenm3G/Juvfo2v/OB1GknM8w+f5LmzZxGa/O4rP+bf/+iH2EZ7TB2rHDFSKgoSHgprCz9IpbVXlZrQYVJbhnoCDw4tfkWZkZzmcIV/+OmXeO7UYTZWr/Pee2+hiwytDFEyRRS3UEYRxwbjDFr8tTJa02i1ieOYQZay2u97PNCxqzD6RMw1/KzVMLQ2qCN40SilI9AxTnlKqhELzo4rQikmSMmVIXgrdbrGz9My+rvY0JtVQRHUxF7fOXjIzAm5q+1cq1VBO/WVhZ13z5VzrLomwrAXtYP6h3bWsjA1y9HpKS6t9/jJ9Ts8dPQZXnvnHG+8e5W2ivjQo2e99or18w7ihMdOniDPFb/4sQ/xxImDOBXxzTff5Te++S3+/PU3+ODDD/DQfIuiKKqgVaBRKg50MKkYyCbIm6lgYE5JCMPjKv11eCfoyoEyuMIypQp+7dMf4ebd3+Nud5H1W1c5cvpRsr71LOzE0G42MW6kEiYC2gg60WxubrDe7XJs3wGKYuA7HOKqScN6JVfu3CsH2+sFilKa3FkKJ36NWoBotI4Rm1dkEHHFmNcbU0XYyQNuZ6SWl8NXs85llTFUu8xUVJX1eVFQOBmb27inToi4vc/U3yfNx2PnmlZkePbRMzSbMd964wKv3Vzimz++yEpa8MSZM5w9dhSxfXRhUSbC5Zaff/Fx/ou//wUeP76AHWxgeot84skHeXj/Qe5eu8Pi8mqAiQqUdp6Zo7wus6HASIq2OVosIn7exCrIgUJAnK22Fk1+57ra6u7ihKHNONVu8+UPPkvbZKyt3mTQu0tiLNiC6VaLqWaL2i4gLM4be2zIXUG3u+khKaTauTKyku2LerY7hqD07aCwrkIHtDIjtnVQxBXJw8DZPXrCO8mzUaPkEJbKKHJwNkiq+f6vf+PeA+TWhVxAwuzpKMRMkmotlZUmZp07rHXaaeHd9kGYAPIYsKnj+Sef4c2Ll3j3xk3+xR/8Pi41HGh3+OyHP0BEgbhNRKVI4Rf8abeJYEgJHt1mqHyNX/3QEzwy3+bMsQPk1mFIgsgjaHGIFLia3K/nvfpQFRGRNFoQxR6eEotkQwprx1hIY1RbAeUUMYpssMbTR/dx8fRxvn5pmY2712jsP4CWgqlWh0YUkWZZuXMdGwzfxBGZOFa6m77YcPguFeUSnFHmXIka7TJFZ7Vi4BxTlHtIQJkIVaiKjKKkQFyOVo1QQYObxAMVGXVCqJ2eUVj2XQe/N8LvoPVi2mWoHTFQ0krHWcZyzkn54MgIo0Bq3E7T8VBAXVB8RGXVO5AqR2fab0jXSiG2ICbilz//ef7NH/0BtzbX0VZ4/uRJHjp0CJet0F+9RZENoXAYrVBxTGNqlkYc+RCkI2w25JGDszz6wEukmV8EqMJ2Jq8AVh5YjcJgRFFohxEhbkyzmjleP/8e12+vYLVw/MA+nj99nJkoxhYB/C4XD6pxSrFWERZouYzPP/M4F1e/z2p3hTu53603Ozvn0wDnwhKaUREYGT8v3B1kXvNGg1URxvlderLL+opJoVFEMXTlFJ0Xo/d7W0p01s+LKOcwUblYXOo652OvE+3UelNVF83nRYgEur0qtUir0lQQMpuP5TbbmLY77hreOb5WQ0iy90i8lQ2ulCIvCg5OzfFrX/5V/rvf+fesLq7x3CNnaQLDjVWy9VUSAwaNFI48z+hnOZ35eUzcoHCeIV64DHo5kXKgIlSzjc7SgAmW+VuAoFQBojGqxc3VlP/2L77O29dukhc5RWyIJeLxQwf4R1/6OKfnm9jhwPe3t+ZIZd7jFGbgOD4d8/GzD/A7P3ybXBxQMD3TIXde8FPwBUApz2aM8fv10pSt2n71IdV7RaGRCToKS+2wlTmjq1qepQhUuXTxXhOMu95MrQJAWxJEJfQmKjKod8RFJQHxs/nSY8Lce9QbmWCkSisipSGzNEQH7EE4vm8hnN/CA+ZivQybCIkCKVKGmxs+kpoY0Q3ERCgTYUyDzLT5ye1luiYCE6GVIjI6dAAs1lgsDpI23/nxj/nRWz/h5MJhfuWlD/PlD3+Yk3P7efv6Xf7ff/BnrAxsjfk2QfZTe9UrnTRQWvPMQ2c4ND9PNhxiNEzNTpMVOU6Nsm8rDiVgtDdAP88ioBTvdyF3uXG9cC4UW6rmkEyNwEBoMuyhF7xtNUBtrRZVF8KGm+UpV1rrAJqWi1V8buFKv/gzWN5c33Go7rnFd4cQH+RnESGOY/qba6TDIa1Wk1YzAQqSZoKbnqG/uY5Y/Cm2lqKw6MThEJwTjI18G44CWg3OXb3N/+U3/hWf++hL/PJHXsLmfVpaMaMNzgyDsKXD2QHPPXWW3MDHn36Ro/Oe2HnpzCn+r7//R7xzZ5EfnrvMl54/TTYcBJX7AAqXALxz2ALuFsJrb53n9kYfK5DanKl9+2jNTDPo9zGhAeAEbGErcSettNfW3urh1M5ebzvCoCp2kXMFhQhxJWmnQUdIkY0E4MWicDiiEB3uayZEtishBPHvahNlrVftnMOKl9Wtr8vaahjj9C7+Wr/GxjC1QkcKMYJGyIoihC+h0Irm3DwqbuC6KdZmWLE0kzbJ1BRWKaKkgdZJGHaxSJ4x357lwP6j/NH33+L85WX6WZejrYT/7d/+WyTaeRBaQ+76nJlrcuaTz2OzFDvo4ooeDx44xEefOMu//KOvsrSy4RXqVVZLb8IYh3aoQZ80H/Kb3/w237+5RENPeQgsTlhZ2+TchQucPvUAhXPECqyzFM5WIdxPFt6ft5tcBfvoZ0V5MXo9IjtJTUlfdqYDTuiElGsHxtyOqmAYUQrtfG/PKjzarg2EAkKUIgVERejKK9+D7VK1Kux2GL5eAZbTcXWhpAlU+62zv6qWx2pRXkgIS6fVoNFosNFP6Q1ToEGBn3ltdGZRTcFReC6wGIg1qW7yzs11ri5dxUTCQwcXOLGwwIn9Ef/5r36JP/zem9y4u4IGHjx2FG18mC+LOa0KbGZxmcNGvjtjoiZZlvKpJx4myVOeffRRnPOfTQNO/EIfFwoTN+yjXcoDh+ZxrSaPHHuQvMh589ptLtxZ44c/fos4bvDg8aMUNmwkUB4cF6equBiQVYy4sF5P13S0d/GGtVy/zNxy8dmMDj07E2nE6XDfCpCittNEthU7ZcMi2tPRCCsXJcAKVLszfN5XiFdtLzWb7+OowR7Wu3Lvjs74ia2LagZav3IQ6RilI5xV3Ly7xBNH5tHO+nZSEPTGRShlsFGTldzyW1/7Jq9duM7KIKPQloVWwocePs0vf/xFHjt8iId+cYHVQZcoNsw0m9jhOjaMKZbiS2IiIMKIn9XVJsJZy8F2g1/91Edw1uLybJwGpjwBQ1thmOZEYvn5p8+gkzbtqAWu4BMPH+XffuvH/OWVm1y48B7HD+0n0qbaoKlqM8GRMb5HT+EPBmDZ+/0a3e2anF29aC030YsKxZQb79HfVwiuqhdVnZuy46GV2l5Oh30Zfm2A7MgBvJ8V8HsuOLbIddSZPA6wWrzifBzz7rVLrHb7JM025y5f4bPPPEmip3HkPn8tW2YKNon4f/3xX/Ly5Zs0p6fYf+QoWZaxtLzCH73+DpcWN/jFj7zAE8cX6CQtchFWh0M6SYMkSSiGOVryALNpnxOKxjgoitS36hhAbDBR7CmdYzrVXhSI4ZDcDgLQ3eLc1WUu3Vnh4FTMUyeP8cWnn+TN2yusdTdY625yeGE/eZ75okWJZxA4ITERRoF1smOUqtcBY/nf2By252k658bY6GPjFzKZ2TpxV9xEnK5Ofdcq8OI86uOkLpsbKDhub3p99yKmbuOLhW65m0C5J4DEZXWmkEpFYQRI+xX01jlW8pxvvPojCg1xM+Ldmze5ub7B8al5VLbi+90KCu1IGgnf/eGPefndd5naf4qnn3uaQwcPoNKUlZW7vPHOBd5ZXuH/8Wff5MT+WZpaGA4GqMiyf3qa58+c4YOPnSYu+mgpgpC7F6Psry2RDdPghTx0krRbRJ0pX22ryLO1Qh9+2BuQSIFLpvjT16/zZ6+/zepwSFQM+J99+gWeOfs4DywssHxriW4vRe/XFEWBs44o9vQs5XwRVpE6tNqGWOxsfLV0TFzAhseBZakBy6M9ilI5gRID3Pa8dQ84cUC5XlYzEoesG7sbhynHQOKd5Fv3Npa5i8fbJVSPGbh4+CJuN/iLl1/hvevXOLhvH3FiWFvq8hevvck//uRLfumLs6H/WZDlMa+cv8gQ4YWTJzl58ChZ4Wi1Zug8kHDw6AHePn+e65du8u7du4Eal6BFuHR3idfeucM7N+7y9z77ElNuAGLRGoosIx0OaGiDdn7UoMhz+mspDetozs77oiMQFVyek+dCqz3DqzdX+aM33ybpTPHJRx+kIRmHF1rAAKMFowxifWhMc+95nYLc5gjQarfGdinXG6ZqN0dRJy4IYYvSJGy21KL2O1tcjWeqYMeqJNpTu1X59g4l9V5+Sphlr2mi2lu4LneOm1pOWerPtZsJ52/f5huv/RAyy6+8+EHaU03+n7/zh3z99Td58ZFTPHGgSTHcQKmISEVsDDWrfWi1pti/MAORYtjv8uZbb7PZXWd/e5qzZx/l9Mkz9LpDlDFYZYmtsLa6xrvXrvCXP7nA/tkpfvUDz5Bn66EiDQ7F2cA0chhj0Bbybo9Gp4OJNdb6aDNYX0VJiqPBsHAkNuOzj5/iF544DcMNjMq4PbDcWusRKUW72cQipHnmsUDnSDO/i26q1aqx22sr8u7zlm1f4FgT/9zS/h2XiVFbKF5lFcyWXUIy0tEbyTn4to0OesKTCvTRXlupH5wde7bVTO89PKCredWd9YZ9877AL7hJHIi16KZmqT/g97/+ddIs5QOPPcwnnn6cTBQnDh3i/M2b/Luv/BX/m7//JaZNBEXu8SzfT8DEQqsRkQ8yvv/d77CyeBsTGe6k17l2Z4m5fQvE2nD42FGOHT2O2JzDhw7Tbrf43voG33zzHT795KPMxI5CHLFp0pmeo99dx1o/W+3ZhAoVRShjQAq0MqRdr7mdaDA5PH/kAPu+9En27ZtBNu4itiCaOcwr597lTn9AZ3aWuak2WZ5TWFvl5XmRo4BOs8X4UD+jxddbpuO23a/65GEYoFch7fFY62ipkK2EP2tFSrkcXI1o+uVr6WrhXdWIHj1kbO2TgJgAxsrkirb+smq3/G+7btxkwqrs3uWoYX0ufDgt3vhMpBla4d/+2V9w9c5djjSb/KPPfIqGVlzduMPZJ04xO9fh3K07/A9/8V2yhtezdjaj0YB2u8Fw6CjyguvXr7K6us4LZx7hf/FLv8jzj51m8+4N7rx7kWsX3+YH3/kG595+kxzY7A84ePAwU9MzLPaH3FpbQ5sY5/wBiTodOgv7aczM4RotiqSJmZqlvXAgdFsa5IMu2cYaRhsWJeFcNyWLFQ8f2sesWNrNDtH8Cb5xdYm/eOcy1mhOn3qQTqtNNhySZ34TurWWdJhilKbTauHEhfxPduVRjv5Rb3+gdmyveUcU+sRSb2iobfyo8nUiUePNfLWtklEV2VAFNdPRbL0a6yaO53SyB6BYxj78/eaDIiOumvPitBjrBXR6ruA3/+SrvHv1OlOR4x9//rMcX1hgaTjkwvItOvuneP75x/nW91/j6z8+j3HCf/S5j9B0PRqx4okTx3n3ziZvvXuF1KYksfDxZ57g4w89yENHD/HA9BRnTp/l5tIKf/j973H+3Qs8cOwEnVaLXCxKxzhr6WcpyKyfhFMOq0AlCUmjScNJ0NMJB8kYhoMednMdbR1FY57f/u7rvH71Ck88eIbHDx9grp0wLIQLt27w6o1bbDrDIydO8tjJUxSSk4vFaVCRYdDP6A4GTCUNptrt0cLFHTohW0Pa+D1RvmV5r/0fVdNERvtXFGONi3vCMLIDeXTUjnNjFP5yg2OZhO5kLCXtSG15N9tagbsYXJ1GTm2HiHb+ONhYs+5yfuvP/oy3r1yloxX/9Bd+jg+cPsNQ4MLiMhJ7CYnjB4/wzBMpr73xNt94+x16+ZB/8sVPcUgnfOKRk7x87h1u3LlOEkcogW63i4hwoNXkf/LZLwCw9uApvvnjH7M8SHHDjHZnhpX+gEG/RycxzEx5PT1VLjoUV9HbVRhpcDiMdhS9Hvn6Io2ih27v45vXl/nee3co9BzfuHCLVy7fJEaTa0OmFDONNk+dOs3Tjz2CVX1ynVM46wWETESR9xFriZOIqWbL7/Z1vpJVFb6rt1UiUp8G2uruyqiot47QlrPbyjOm9+hMdhCoVNVujtoWv21yuiPGhkbttjL1Pttn2yreCetUt07YaXHoKGGDgn/9J3/MxUtXaUeG//jLv8ijD5zgT17+IW9dv8Gdbp+402Lf/DxHDx3g6bNniTScu3iJH99e5p//zp/xax9/gZMnTtGMY4r+Jvs7s2wMC7537i0+9syTNJTGBiXWl988R687pNGIaTQbqMhw+b33UOmAx44f4oH9CxTDzQACZ+E6RVUnyJNYhXSji9vcIHY5qjPPW6uOP/jRT+jbgmdOHqW1b4ZzN64QWUPDREwvzHLm+BFOLMyTuT5gSYiQ3K+K8HtmcmJlODA3TzNOyIvMQ2jOVRVRLX5tC63b2qjlnpFAdavnRGMrc2QSnrKbAZYJIqUKVIm2SNhaGfnlM6I8pFAymUPVEmld4URbM4wKpHTBY8k4lHPPXm7oroy05hTiAvFVu9oEnMFq4ff+9Ku8c+k6s1HMP/uVL5Mkmv/y13+Dy3dXEJeTGEOK0I5bXNo3z7PPPskzjz3KdLvD6+cucn2tx3/9h1/hqUeeZGlQMN1s8qEXPsQPXnmZC9du8levvsHPPf80N9Y3+cYbr/OtN95EkhhnIpYHfd6++h5X3rtAyxZ89sUXaCghN2ElWbU+IYQnm2PTPmm3i+Q5Smmiqf28udjlX333DW5njtMHjvAPf+lLXNtYZt+J/Ziw2LHZaKFtTrfoAYrYJH4mu/B5HqKwaY5ywpEDB4niiMIWNZuQCZqecs/GFYR58NKLqvq8tt8x7P2Vd0pOSZWj7xyC6yC2qormyjK1NoGZ4Ub9w5C/KAVRoDU5vFz/doDZ1fyjjCbtdsALt3Y06kbpaoqopcqpchC1GvzRX36Dn1y6Tkcr/pNf/Dnm56b5P//6f89mUfDYg8f44CNnmJ2a5ubdNV555wJ31td4+ZUfE3/weY4eO8658+cxCXTTmG+88Q5Ry9BOEubn53j8sUf59nfu8off/S5vXL/MrTtL3F5doTM7RzNukuYZL7/yI9LuGm3X429/+uM8cuIA+WANE0VhsiL2FP6ioBj0KAZ9XDrwRKZGg0Hc5usX7/KV1y6yqhSzU1P8Z1/+ZbJiwO3lu3SmOpVudlEMUNYPhwmKIcJaOiAXFybtFMM0JzERhw8Ewy3bqbJ777e+1HFraiQ4Imcr0dFyHlhwiHJYLOIMWsfUR+/UDlId0a74m4xgjtEEfW3hXWhQR8qPIWfV97afLBX2ylWSa1tnEXbNRNU2XNJXW0LhhHa7zVe/8x2++/rrKGP4B5/7JC89fIb/8l//O9ayjI8/+hj/05/7AjOxQxiiHjrBZ585y69/5Wv8+PINXn7zx3z0Yy9iGg2K9S7PPfwYK8vrvHfnOs5EDLMBJ0+dZLP7LK+/8Tqvnr9IuzXN8WOneeSpx7ly6RLdK5eZMkMePTjHFz78ST7w0BHywbJXzSksWIstCvI0R6VDyAZ+gDtOKEyTS2tDvvrWa7x+fRnbmsYMh/zTn/9V9u+b5bvvnKM51Q7rxEJECZvVRTz7Oy8sg2Hql+1or7LVH6RMtzscWljwM92hjSplirUn9ZYJ2B1+AdAI2XZ+EEn7XNBRyneoveWAW9svegzHGdW8pXq+PxFBLSEs/DNah0muMKik6r2SMFdaElqFsTmE7XCNG0sd6hxKXR0Eh3FgGi1+8Pbb/Ml3v4t1jl996SW++MwzvHN3kctLqxyYavOrH32OKTYZrq9idI5Yx6Hp/fy9jz3LxZu3uH33LsPNNaZnF7hyZZEH9i/wa5/4KP/Vv/wNbvSGXFta5LHTszz66OPMz+0jzVLmZmdZ2L/A0GX86OXv0mLA3/3oB/jgg0eIi4zBtSterNNaxFks4sXLlSIxCjU9Rx/Deys9vn/xEj987wbrNiZOZsl7a/yTL32Rs6ce4HsXzjFINKINxgVPU6YiyjM1RUO/PyAtMpQxKGMYdIekg5wDs3PMTU9hQ5GgxsoMtcfxsRosJoHeputzdAXivNc0aGydba12dytRhf+NjWXW5kNGQ1oIYLRGXIGzYSkhnsQZG43K3XjxskP7bCcV1jHuo1c8Gi3eG2vfhUZ2EnOru84ffeMv6eYpH3v8MX71pZewON5dvs1mNuCRY4c53AHJ7hJFvs+/ajU3L7/LiePHOHlwluXLdxluFizMTKOM4cKl9/jbLzzHp194hn/5V1/jjbfeYLYzxcH9Bzhx8oRfR6E1aZ7yyiuvMBgMODo7y/GD87jeJrktiPA8PG0UFq/gmoth0VnW+xnXbizz3t0N3rm9xGqaE7WmiIkYrG/w9z/7ST729NP84L13WXUZSidYZ0lEjdKjMeqZJs2DIHlAe7vdPulgwNzxEzSbDU+OKKV3d1PCFTeGUmwnqdaIJSVLSurrGVRgy+sah1BGQe9eITgweQKjt7R4T+vGSS3mBzUWKWU6jNf1GbPi0atK2MBY7Y4oRx38WEst59OB9u/ZyFrCaapCfhgN0BoSzTe++y3ywvHo0aP8ky9+HqMcF7qrvLt4FyeWzf4AJxqr/I6LqVaLr738Cr/3ne/zP/+P/zGt6Q5xowVE7J9p0mnHXF9d5kZ3g8+88ByvX7vEq2+/y7e+9TXOnDrD/oOHiYxh0Oty9cYNri3ewSrDnUHOf/uVb7PQSphutUkiQ6y9OGZuCwbDjH5uWex22egOWetbTNJiamaadtJEiiF5d4V//JlP8YUXP8APbl7lVtYlbiTe52nlJXHDosSqUNTe+IqiwMQ+7Dnn6HV7aGc4fuRoAIVHgPCOudYesdfYGK/8omR8IMy5UF9qtAqC5Yw2eI69YihOol3nQQKrSyvjxw/FnxCff43zvRKtMVq20a/HN6xv5Y+NNnVtX4czvrvClXoqSlBO0WwmfPcnb3Lh6jVaScKvffoTnJia4sqwy5u37tCcX6A522Zxc53vXbzDhds36PeX+F/98i8wNT1L2jzA//crP2DoBqgWNKZbTHc6TDcSllZXuXz9NscfPcs//YVf4rfir/Gdi+d59bVXieMGGMhcgbUFp/YtsH9mlqX1de72LFeWNsGte5C8yPwNMbpSde00W8w1Znj0wUM0Z2c49+4V1gY5ceb4R5/+HD/3wnOcW7zLnY0Vombiuxcov1lUhEJ7hYJGCRRrRX8w8IdVa9CaYXdIrz+g0Uw4eGA/Ni/GJuX2CpFMtgshjsrdcKV8nx8boNyEbgQVaeSeYIfaroyw0+ySIvINf/zAiTg7xhNsBea0i6IdKPmj4kRJXQ1/p864CjO1wZmHUGzEL1he6nX5y1deY6Mo+NKTZ/nQ6dMMnOPq0iIijgMLczx84jhvvnWR//7r3yUVR1T0ePXmKq2peRpxxN1uD5GcR84+SHuqRaEU+w4scHVthdcvX+ejj57lUCPiP/3ln+PZK4/y6rmfcHdlDXHQbCacPXiYTz71NAfmZ9nsD7iz2WNpfZ21jXV6gwFZUeCcEEeGTrvN7HSHhblZDu0/yOU7d/nDb3yL9ZVVWknCP/j8Z/jsE4/w3uoy59fuoJsJRgiDRIFAIJ7bSJA+c0aTFhm9bFgt3jYosr5FMsvhuRkOze/zzzGh0i0jmYwZ5C5spmCAkdZBf9tHSefy2nN4hQhb19cqOZvV4FWJZNTHMmvL5VxVjPjSHQyYBIqgF6MUXg/M6wQDNIxBKwKhfWevqlBb6FOT6Fn1gWk1tr7L4tCNmO+98iq3lpfYP9Xmcx94AQGura6w2u8SJxFpOuTs6QfZHAy5fncJVWgk6vA/fPXbYFPSPOXIseM8+vBpFuZnkKJAjHD48AHaN67zxqWL3F5/gcMzUyiX87GTD/LRkw8ycEJRWKaSqPqcm3mOSyIeOLSfs4f273rmc+BPX/4hv//9H7G4ucZDhw/yD7/4eZ45epRzq4u8vXgDZ3QgE4jHDssFRCXNX0qBKE130KVwNgiqC846Nje7UAinjz/AVCMhG2RBxUy2UT2qlmrAW6UG2I2K09L0LBqhbXRVBHk83SK4ULwqbyuyAxu6rMJl16GkcVKh14KJQt/SBhKqX1ynTChEjCLWitzdm2Y/iQsoe1xk4Yxhud/j1QvnEZvxuac+wonZOe5mQ95buUtmyipMEAPPPfM4Zzf7FLnmnXevsry6igOOHD3Ci888RbMZkadDImMQW7BvYZ59nWmWbt/iuxfe4W994EVwfuzUCDQ16CRiIMK333qDNy5dYmltnV6aMdvucHL/fj74+OM8dvyYF6R0EBuD05pzt+/wB1//Bq9euow1DT7y1FP8k898gkPtNufu3ubNlRvkrZjEabStiYVPSFOUMqRpRr/fC3mf70gNs4K19TWaseH0Ayf8Qhkt3EuK+V5tUBV28sVaiE3tvrkCG3aaeG9qAqNoVzR7OyF1J5flvb+ffveq+DYoyYcwbLxn0krRiDT93A9n79Xw1BjcorZSYQN9bUQFaiUJb7xzkZX1dR48dITPvPg8ToT3lu6w4nKUjrzchVeURgnMTU2TmITDMzOsddewkWFmegotgk0zL7ztfGyLGzEnjx5iaXmR754/z6eefpr5JPblUqDs39ro8utf/XPeuHSRYepoNdpoLdxe2uCNS9f4xts/4ede/CB/56WPYAysDVP+5Ec/4q9ee52ltS77Z6b58oc+yJc+8DwOeO3WNa6sLiNJhBJNoVTA2UZNo/rAvVNeKGgwHOKcA2MorKfddzc3GXQHHJua4cjB/ThboJTeU6YntVGMelu2WjzooJXocL0EpcG5IogRlXzRMHui8WzsnYx6t2WFjHEEVZiXCJbt8tHQiSvCc/k31YoNq2kBxowluDupWEnJE9uJ+ijjnGutFSKWty6+g4kaNJstrq4skR7Yz/XNTYZKEUtYXCg+fLnI06BckRJpxfz8DE4JeeFlxnxlaKpQ5ArLseNHuHTtBjcXl/n2m2/zSy88jS1yMA0W+0P+xW//Hufv3Obw7AIvffBxHj51gqlmwvL6Jq+cv8Cr717gd7/9Haba08y3mvz+97/Le3cXSXTMS4+f5Zc++hKPHNjHwBa8dus6lweb0IqJrF+pYsPuZS2T8DM/PZcVGb1+3w9QBcFJWzhWF5ewg5SHHj9Ju9HwowK6FNEYV1Csd0VFcQ9qnEKLox3H5VrI4Hmtb5NK2OCiTUVUUHvgGd/TA0qJvhsDWuOc9or5YilsRlLxUxSNKMKojELc2GzrXt39TvMiLuQhcdzg9tItbq0uEkUJl2/e5J//5m9y7PBRDpw4yMzhfUQ6hqwgsv4DWKUrtk4BFEVIqrRQz25KexdnaTcSTj1wgtfXLvBXP/ohL5w9xZHOFEop/uLlH/H2nRucPLCPf/bzv8Sjh/eDbEI+hP1zvPjQJ/i9bzT4wx+9zm9959sM+kOG+YAHDx7m5178AJ9+5nFiFDd6Xd6+e5PFLEUlvtq1aqSHU67acEFzpkJSxeMTm93NakxVA1EU0dvs+aImTjh7+iGwfm+wVSoshJHdjaxUSp2I2TkirWjFcaXlI+JwRe61MZTz+aM2oA1WRtJ6lSzbhHseTTKG+kIZKXmAolBRjC166DCEJLYAV6BUAiK0jKYZaTZyQZfr63GImCqMSkC0ywk6UfXNRlsEG8uEldHvXLx2i81uyqmj+5g/Ms+P3zrPm+feoXX7BgcPH+TUsZMcOLCfqJFgXYp2fjJMtASCtw8d/g7r0a6RkruGI7XCsZPHuHL9BnfuLPPb3/4+/9mXPs+w2+PH598hjhJ+7RMf59HDM/RX3yUOXD8cRHHCF557hB+9e4nrfcu+qTk+9sQLfOrFFznSatK1OecW73BpdYlhFKEbMVI44tp7MKVEIKN5Wv/0gjYR3WFKf5gGcmkoFnXExkaPPM05c+wYx48cIs19buYJAnoL0XfLCtza7MdIoMpfI6c8gybRQmJ0WL0rIQ0rEBWk5iRCRXHYRh/IF2r0mMRkje7V/BNVe8thrhZnK91AsQUqThAHRkE71mxmZS1ca8Op0fKY3UQlt+YALpxeEWFYON6+cY3eoM9Tx4/wdz72YV5+9CLffPXHvH3jJlcu3eLW7VUWDsxz7NABDi3MMtuZIm7EoMHaAid5ULmPKi1IKPHFILTjIIkjnnz0MV5e+xHfe+MnPP/waY7ML3BnY4Vj+xd45Oh+svXrtBMNVnDO4BodEEsr0ezbN8u7S1f44he+wC8/+ySbWC6tr3Jx+S4rwx6qGYdVD24EKteU3apLEOZwvOPTpM6ysrnhpZDL4CiaorBsrG/QiBKefuxxIm1Iy4U7VUK/fcB6p+nF0awNgefnaCd+tNPPHIsXpbRFyAUJ4ddTU6qDfY/Zk+h+OtFeHT8OE0829DozdNysZHpbSUTSL8hL/a6KVbGdCb17caKCIk14Bq1Y7/e4cfcOTlKOHpgmFuGjZx/ig2cf4sL1G3zvJ+d4++o1bt28w+s37tJuTdOZazEzO8X87Awz0x0ajZgkMZjIoIxXpfdULxfGEAKC5YSjRw/x4KNnOHfuPP/2L7/Jc08+wcBAp52gVI5FOH9nnenpBoen5/jtr7/Cepry+c99lrsbAxpGs39uirV0yOt3r3KnOyRPNKrT8nxCEe+htwzzlNdB40diBcLqC1jvbZK7woe6cCXjOGLp9iLDbpcj8/t45PRpirzwylr3XAq+ZX+bjPig5b3TIsQK2o0EHdY3+KWVXlbOOd/9cMb47UkuKOvXGOs7GeF2fcCxVojyYGhogaENyjSxdkhcbh23OUiO4IerWzqioaCoDzbhUGLCsEltZZTo8GEmrIuqSB+BEhZpNla7ZANLJ2lz/OBBnIJLd27Tbrd44vgxnjh+jKVen59cvsJr71zm3Vt3uH1rkVs3bqGNJkpi2tNt2p0WnVaTVqNBYiKaSUIcm6AqVfiRydzvxSiskEzPsZRavvrDH6KbbZaWN+jmipgm/9W/+zd86sPP8A8/9Rlev3OH9+6u827vz7mzsklrqsOGEr5/7T1WrIVWGyMFzrkKJ5DaXmS1pf9a9nkJKzF6aUo/HaKNX53qtAcHbWFZXVnDWHj2sceZbjX9elfjkQC96wre8eGukveuQqqilIPC0TTQinQYEhOUs7girwaWnGiP/6kYZaVKrzQKu5s4kdThkJGMCPXucakR4/CLaazSOMkxxi9atkWBiSPEWWKtmWrGDPp2glzbfbZ9ZPRetFJ0B31y5zixcIADrWnSIuftxUXSGA61pjg6PcfB+Tk+8cRjfOSJx7jT7XLx+i3euXKVm0t3WexusrbRZX1pFVs4tDb+IhlDVO4VJuygs37xjmjjvy/QjATrNOuDnN//zmscP3yQdT3F5cWcn9zdoK8iTGeaS7dXaCQRjz56ljWXYZVDNZoENV90uXGTsj8+zvwepf0jRzAsMlY31v3Gy1C9K+fQRrO6uMRgvc++6XmefOQsNvUyH66KvHpE8Njiacs5EZHRCi6klNkYSS634tjnqQG8tkWGtdYLegaJNq/+GuaHUHtq+EW7zeBWPezKDoxXidKRTz7FixYVeeY3Zir/EaYaMSvDgrwaWlLbWkDV+h21m/RaAMKtF/r2Bi7sn27RbCSsDfu4pIE1wrVhjxvdDebWbrPQ6nBgapqFqXk+9ejDfPLRhxkCa70+K6ur3F5a5ubGJt1+nyzP6KWpT9jFCwJprWnGMZ1GQqfZpNNssX9qmhNHDnJ5ZZV//ZU/589ef53kLQ1JwrvX7/B///d/wIrLmJ5ucfbhkxzcP8fC/DTWWbTRftF3mVNVoc0fbKXGZ2rrRagVvwByfXOTwlpPOAg5sdGGPLesLK961dfHn2Km0cIOh2gdNj3toHI1Nk9btkOVbCsAJYTfqWYyuk/icC5Hq3J5pfiUwERBOXXUBXH36ElEWxWr6v07VyHg4aEE0QoVNSAtFeILsMbrRwd2bmygExs2chcSflUNttc+RX2v1oTchCDf66NQHBm/EUjEh1Ol2cyH9G1KrGOINTbWrFrL8voy722s0UkWWYgj5jsd9nXmmO+0OdJp88TxY2NexgJWvMwc4tVQS5Lt1jbakYMHSA38+Q9eplfktNtt8sGA7qDL/rkpnn7yCQ4dOECe5bgi923LOuCmRgrwTo/utyh8FRdQAgnguGjNRrfLMMsxkQkyKeE5TMzdW4v0ugOOLCzw7OOPYAsHkUclTKV6Fj5boFtJWCYkrk6vqilx+DaM72q4lFasiY2uftaFlVwqrNWxykDc8HyB4D0llO5W3Yvceh88iGpliW4hDCs2BlhskWGS2C94VoqZZkw365GXS0zGxihlW0jeETGvES78hdLVFsuscBSErofz62G19oRMAbo2ZyPrc21zjdjcoWMS2lGDVhzTTiLiKCaJIpomJtLaT+0BLvek29xZsiInzwt6RU6vyOlnOUkr4dMf+zCps+gkJstShsMBU60WUWQY9LseK73XJtKtQHM5/F2KlkeGzX6f9V4XIk0+oqJijGZ9Y5PFO4uYQvjQ88/TbjUoBrkvBMJ13v7aI5qdJwVMar9WTV4iYKbRDIbilXKlyH33AxsOscHErZEODDv6lr3hgPUcbITfqGooWesI0VHYHaI84zfP0HHLh2GBdmRoRIrMudEeN72VijBpwm0r+Se0n0QwJkI5xSDLGTohE78kz6u+i199FfiCGuXXysdNnAhDZ+kVGbooYOirXb/DA2JtvMGEosCGtWROXEUFKzSB+R1DmqIFIm2wwyGJgmanTeEcWT7EKH1f/W2EwHYGpwUnFq0Nwyxlo7dZ6gH4gxd4fVY0t2/cpNgc8NDxUzx65gz5MAsSeaNrtv09SE0TUO2YfAfZKRpGMx177cdyb7S1eeiE+ZxYmxghhtLRlILtW15l4q64XS+SjJMWqz6hNqi45dswznnZL5uhbeaXV4si1obpRkK/n3oORTlFtWdBkhpnUHlaUmRilNGs9/t08xoFqNZqUlt0a0xmq4os0rGXFtYlF9FrtBQiHrmXQHhXyuczuKoLESk1PrivfE6qwz5jl3nG8WjuYjdliB26ToGoqYyhn2asrq/5HCro3EhgmBgdc/PqLdaXVpmOEj790Y8RoXESxNJ3mc3e65lQSqGcZSZpElfYn8/5ijzFiPUGrvzCcqfC+g5RVfdmL6+l9zJAPL6tXCFiUKbhl9UBGgdSUGT9kGb7Mn22kdDUqlJCLSX7ZQcO4lZP6GrKCc45pqY6xEnC0voqS9114iTZHsJra6HKXMqpsEpB4WczxIWHCiCvptCKwhic0v6hNaL9/5327BSsCquuAjhswBlBjILS8zgvhya7tBm3S4sIaO1xyciQ5jlLm2tkOvSz8N5XKUVkYjZWN7h98zYMCl56/gWOHthHNkirVEV+ygFthcI6S0trFpoNlNhQsTvyfOgPLn6pt1UKiRu+anYu5IVhy5a6t7a3nkhCKDn/enSaS5a/krCzTWt0lFRVrQ6rsXJnKSXfE6WYaTV9QhuEzMvRFa8zokcJ61YFBOeC+LnglF+80mp3iJOYbjrk2p3bNBpNT9n30SCwpkeYmgQqOxVUIGixGHEYF4gQZWdGXHV4ylVZUlsP6yKQSKorpmzAQZXvtbqw6VLCAI3egxGM8D5VaWwPsoy7ayvkYR2sDg5eiZdgy7OCq1dvkg9STj/wAB967kWyQQZG+YNWHg5821PC9amDO7LLhqpy7YJyBdPNhlevcr4laJ1D8gITnJETvA3URNClRnTYSUStbpi6LrdV13gZeRGp4YBe8tYFTNAkTawyPhUV8avu0wFK+eoNscw3IjpxUAHQ2oeocJomqWY5N/p3U/L6lCLNLY2owcH5OayKuHJjkaZJgrqSqzxJObkl4q+QsoK2gir8/7Xz/zdW0M6hrEU7v6bVWL/rLCof1j+MlSAYOYoE2uvUogqHCSKQaqsimGPsUWeCl/1dbUsae8QgL1heWfObCExU/Z4WhbKOplMsXr1F0R2yv9Xh5z79aaLgcSIdujoh+ogLffoS/qmuqx7tLK5fd7FYFzY9iWU6Mcy3Yr9gW4NBkGyAkiLASQZUQpS0cUQVlc6VjQt1j+JyD4O54/nJln0mVhSiE0zSwroSwM2RtI8rvPC33wUmzLdiIu0weoQQleLjageJtmpTea0dFZmI08ePo03CO5evk2cF7cRLTkw60NWyxS1NcVdO6pfzxbX9GqOlFOMb75QbMVTqmJ0Wr0uzHU5VtbhRe8hIYcAhWK1QcUI3TVlaXvESuii0U5iSLGGFVtxk6fYi3ZUN2qL4hU99iqP79uPywvd7a6C9X5cljAARmXDb1daBS18kalAuZ74Z0ygH/5VGigyX9lBS4PDpi4maaN30+uC1qaOdvN/YJtNSVf+eYUKNWBolw0FVe8VMSEDj0E0SlHLYbBBCmEEE5uKYqdhgs6EPutoryeugMzeR+RzwqlKv0AT2zanjJ5ifmeL68hLXbt3m6PQ+Euf5iFp8EqwCz3DMgCpjHBVVdSm6MRbOPZKorUDSGIYbDJpS9FzXDV1GylMoRBusMawO+yyveaa2aF9wKOsX54Aj0QnLi2vcWFzG5jkff/55nnr4LPkgIzJmTOq0TENExgEvNZkXNyYSoBGMK5iOFXONOLRRIkSc3xZPEaYVFVYZv9qilC2ojXSUggVuD50vvdU6d7rgboSRVj/nBKyKkaiJxY9uauWwRYqzQRFeaSIRFloNGtovMy5zElWKYW45FdX/saAsaC+95mzO4flZzhw9itWKH5+/yFx7iihEYe2YuBL0XqFgt/xs0gneM2w66fcrT6zIlbC0scrKxmq1UbPMRF3I4eK4wfpql5uXb+IGGc88/BAf/8CLZL2MpBz82aIRPmmgfCS5G3LXsESwksbDoQuLcTkHOm2vNhtYQs6m2LTnmfBKyAUkaiGm4feFVHMlPt92quzw7Fz5jwgXu9fiI0WE6sJJxZP2GVdElLT8SbHlFFeOZJsgRXU6pyPDXCsJE1QydjMmGYnUQ0k5ayqaGMUHH3uS2Zk5zl29xOLyKvPT035JspJqsXXde7/fr3oejMiEub3ao4RpZFzEVmrM4/LP2hjSPGVxeZnuYIBoU8uxNRiNU2DiBisrG1y+eg07THnk8FF+8VOfweW22ttcSXWIh6BUTVZNVWXxiFsnYdKuhGQq6CcYw3yzQceY0a85B9nAv54olDMIESZp4YgC31Amdvtlt2s6qQq+Hy/hWbHO9za1IY5bgXgaWtZFD5sPsQokTHnNtZp0AnewUH7DpNsyrSpjIS6sAwv9QG088+OhB45z8vhRujbjB6+/ynSjiVHGt73UBAhE3ftBbRhv66O+g23bv2/5u1Nq4ohpWc5aYL3XZXFlhaLw02xqzJwlbL2MWFpd552Ll9jc2ODgvn38wmc/j7IBlI9MiEjlnGaILjUSiRUJ+bMHR0YA9OgKl5/diiKJIuY7rZBr+W9YO8DmvQBLawqniRotMMmILLHl+tzPlx4NXKmxtyZbYIKKsKN0FfOVOERDoSNsnFBEsZfjcg7nFC4doMu5EYQE4UC7QUKOUnkV0l3tRLhACCjxOQmysEoFPRrfwObjzzzHTNLi7Zt3+Ml7N3AYMudwRnmF0DJHCLX+KC/b8gitL8JDlTzyLT+zk2E6rfxDhfxNe8zR48GBemAUzmj6ecrS2iprm12cMog2oYNjK46ddQWxiVhb3eC9C5dIN3ocndvHr3zx52kmDdIsH6EFznpWstigau3GoVXlGwAO41UIA6CrdC07DMhSLAUHOgkJfsmiz79TimyzutdOFKIjTNz0KYIakWV3ijZb12vU/y57KULK+zaqINVIksGLsXkjUTEmaYbE04TKqcAOu2EjpX++qViz0EnQRRE27mw19rJ6laBTUsIqZYhxpGnKg0cP8vTZx8kKx4/eOsfl27dZ7G2ymacURpEbAkA8Xpd6nEB2iKOMq7WPoQA6aBWOHlKJ5owe5WF1eOKGaEiLnJW1NVbX1sikQEUabXS1b0qXDGKlieImt24t8t4775Ju9Dhx4DB/55d+mbl2G1sUfhVYra++NaSVyb83hkAEESrsriw4Rvo9DnE5C52Y6cSEcOwPfJH2/OJpoxGxFGLRzTZSFZ1BExDZMXXZSfxoGxlhrzO6oqRaXKNDMmvL4ZiohRQ5rhh6x6EtNh9gMo1KOlWDe77ZoJ8W9HKpdkpIOD46WLwOwGe9n+icB4e1EoaDnA8+/zxXbt7g6u3bbFx8lwfOnCRJM1rNmLlOh0YUVxdejVzs2Pae7TlKbYS/puow5llkZw6fiPgcDkWaZ/S7A4ZpihWL6JJx55fJeU/k+eyx1liJuHr1Jos3buP6Qx574AG+/KUvMdVoerilxlmUHat1PXaLq0KgzAlVrVNnNKbImEo0C60GIkVQEBFcPsDlHrUoxAXCQRsVt7GiKpZPtcRyyxzRpG7zpEU1ar1wslMrbNttGvNS4wsNlfK5iJYhdrCOcRlGi5drIyZqzaKjBuVS556D2+t9etaGXWqhWzG2iVNGo4TlRVTlidMQJ9xaW+Vf/8Hvsjzo0Zmf49TZU5hYMFhm2x1mmx2aJvbdkDCgVC3fU+O97tFHHKeoySTmjhoRNsu1qMpo8qKgl6cMspTBIMU6h4501SXQlch7KBdEkZgG2XDIlSu3WF1dR2U5zzx0li9+8hMkWmNzv7qB0FIMrIQSf9/S5zU1VrvU+H5l4eKZQz5NcLTJODI3TUcrwt53nM3JBxtoyXyL1YHTDaLWAtY0K9jJOSEKWG5Rmz1299huMDZ8u5Zb2Y02pNVoULySSVMK40btLp8HlN0LC0WXYrjup8XQoBO0Tkjas+Hy+4u5WRTc2uiRS+Q17pUJdKQgfqQcSvRIXdOFhrj2Hlesgthw4eY1fudP/5jNoqCzb4bTD5+i1UogT2mZmHajSbvZJo4iv7zaukpabAQVOLZsTBmXDakJK9V3LLvgwdMiZ5ilDIZD8qIIczMjmMTVFQaC8SQmRothfb3H7Vu36a2v09IRH33xg3zoqWcp8tQLS1Y30fh2G84TdEVqJaEfiwzqPeMFpZTi6D4v9HMcBZFynJhqMZNE4Xpbb3CDLtamaMlx4khFEzXn0cl0xffzyrTBQaggFTJxnnj3UVy1llu5TzjLFwLiJwhEZDS1FU55rHJcuoHLet4LEmPQ6KSNac6C817OKljJLCvrA5xpkIfwqyr1LVflVS4st1FKUYTiwFiHdQ7VbnL+vff4gz//Cl0crflpTp9+gPmZKWzuMclYx8RRRDNKaCYJiYmClG3YcbuVO7c1ftTCnxOhKAqGRU5W5KRFRm6tn4cOpAFVdXG2h0qjDJHSFGnB4t1lVpfXyQcDDi/M84WPfowzx46T99Nad6YU7AxqD4iHnSqnEbjWooMBThhnF6pBXSMObMrB2Tb748jjp8pHlyzdRKV9hAJL4c9qPIVpLmDFYOpRIQjWeB3onTHk3RZQTgzB9zJAlPI91YquPzJAq/y+2EhS7GATZTPf+AkjeybpECUesgEPW6wMMpb7BXkUY0WISmKAolr74ImogW+mSyxSqrmGZrPBO9eu8Uff+Dorwx6N6RbHDh9i/4F5UH4DepkL6SAeGekIExkiE3navDajhLrUNQ7r6S1+9iUvrB8id47c2u0rS7VU3RunR1rLzjqUNkSqgcstS0uLrNxdYthLaZmE584+xMc/+AE6rSZ5f0iErhlgjY+5TdypljqU3qlCpUM1GziSVvk+sMmHHGhHHOy0fP8+AM42H1AMe2hJEWfJlMaKIerMIaaNsxqjQ+u9tvmoTkJgj1NA1Sz4+/GAnismY2pXVY6v/WRZpARdZBSDDWKs/x3jZ0Yb7RmUbla5XaYUS/2U1UFGoc1IlLLCuVygkJsxCKEcHSx/Lmk2WVxf4yvf/AaX79yCRszc3DSHDx6g3W5RWA8xOJxn59Sm0LRS1Ad0Sy9WYmeuJhmiwooDUWqb2oAKczFlseMjvUYbgy2E5ZV1lu7cYbDZR6UZh/bt52Mf/jBPnzmNy4qwwkuP5oGrbaBlKqCq1KGk2Zc5QvnXEZ3N1YQ1vIkY59jXijnUaTAa7HTgcrLBOso5hBwXFF2j1gzELQpRKGUCFOJ8DfBTGqCIbDfAre5yZwMc7eAuqU4ebHdhnkT7daTZBgy7nkYex4EqFBO3pjEm8YagBKs0i70BK4OM3DR97icSVGe3DM3UvU45v6I81aoZRWQKvv2j1/jhW2/SyzOSdpOF/QvMzM3SaCeAoygsLox3j6VLY8rYVINW1TIerSpeY6WBXGrMBB6gqoijEShDlhasra6zvLzCxtoqdpiyf3qOF558kmefepKpZgM3LNAqCp/RVXuoRhK44+sCy/mViv4UikJdGwKzyo12EihBFwMWmjGHpqeIxNYMOScfdsGm4DyptbAKHbeJWzPkEmMlD5c8qgo5pUPZsgvtysnu+kBqLStk20KSvS6LLgkKtV2xSjnEaGxgwzTIKPrr2DwlNppIaywKMQlJayosdvB5ZI7hTq/Pct+hTVJd4MoIKSUmthNZTXhtpxwqitBJk2s37/CdV3/ExRvXGBRDWlMtWjMdZmZnmep0iCKD1sG/ybgWtU/kPTBtwghk1SmRCdSrcOsjk4BSZEXBsD9gfW2TjbUNehs9XF4wP9Xh0TMP8fxTT3Nwbg6bDcMcbTSai1Wj6bNJ8FjoUtaWC9ZBGBmHzLyOL8pZ5hPNoakGsXJh458GKciGPbBDVEg3CgHiFkljGutMIJW4ipgseLDf7cFMVE0WeEz752dhgNU8Qyk4WGJnVXvLESmP9Kf9LuR9GqGzgFKouEnU7PgBdQHRhjx4wuV+geg45P+hxSYuYGHbJmkw1htxOaztxNFIElIFb1+5xKtvvM6VWzfYGPSJm03a0x2mOx3mZmdotRvEcUySJCPNk2oqNAxiqfrEog6dtZG12MJSWGHQT+l2e/R6PbqbPYrhkERpDs/v58ypUzx59hH2zc/7n89zjAoFhtPbI86Ehn7F9Jat31Nbxl79yIEORjbfijgw1cLjDSOyWTbYoMj6REpwDgoxiGkQN2cRv+EuGPAou/Sb6PfedpOdiK8iqNU0lxLXKv+xPqu7y+gKIyKPCtKxUqP/+F6xaI98RVLgeqtQ9ImUwhhNrjSYFs32TGDw+grSKrg+GLLaz4h04k+qR6JD/jV+ihy+/adEV3orWgtaOZyDpNliYAveu3WDc++8w9WbN1nZ3MThiOKIZrtBq5XQbLZoNCMajYSk0fCrJ8Ir2ZJuhvbDOEVBUViyLCNNU4bDlHSYMugPvWA4in1Ts5w4dJizD57i1NFjTHc6FFlOUeSUew6qzSs1dQRvXCNGydiGShmF3MkG6CpgJlIKsZa5dsKhdhwQwnKblSXtb6LcEEOBWEvuNNa0iFuzOJr19jTK1eciw/CWkvdlfNsMsJw52IkRMrF8rueIY62eWkmudWgL+dMT2SFFb4WIHK18Y17pBto0iFtToGLPBlaQKlhNU1b6KTkRiCcbiJSMnBoJLsh/6DHmrIcVvEPwrScVG4wxrG1ucuXGTS5dv8ri6jLr/S6DPMAe2ot9G2OIo8gXBNpgHdiiqIzAOkeW5zhrKynjVhwxOzPNoYV9PHjkOMePHWNhdg4jkGcpzrngNWUcW6wbjoyMzUMj5fjCdo1nrUbFSI3lGCKQI7IFC52Y/a0GsajgyQVcTpF2KQI/E/Eqp1bH6NYCNkpQojAS+QLMiR+jKPmO5YZS/T41L2oYZmWAbGka71Y6T4rlJQ1K1QaJCEBtSZNPNGD7pL1VIvHhmTDMrpMWUWuWchzct3c0q3nB3X5KjgaMZ12FQKCVjPvBiZqDgYWtasPg2qtfCdAfDljeWGdpdZmllWXWNvv0h0MG/QFFnmOLAmsdhRM/BaiUN844pt1uM9XuMD8zw6GFBQ4u7GNhYY52s4VRUKQFhS1GY6Lb6KzU69CqiBittpDajl63/R6o0d4P6hsIbEGiHAemW8wlkcf9ygpfLPmwixQDtBNveCIUaJL2DMTTZGGzlbblnj7fPHCasbnuiaznvXItfxoDrDzj1sq4NjchQR2rZEprpSmnbLUb4PobxJKjQlfDYiDukDTbaBV5sUN8y6hrHYv9IZupA2I/+6qc35BZmqMaP5G1bmjFVNehKvNJge976ijyHi/sc8utkOU+P8uKnCzLyfKs2kJuohgTxTQbDZqNhEbsh9sVDqzDprknWOjRRskR62NcJaWWsGwjjJbf3+2eOHHYUCyVanjK5swmigPtBp1yY4GvQ3AuJx1soFxOJA5VFGTisCTEUzNY0/TbFkLY12OORvvCY3wFwsRNI7vpUO9qgPccItnFAMv8RUudnj6eULtAZIiwGJdhB2so0oDBRb5lZ2KipIXWjaoqFCAVxcrmkLWswBoT0EGptjaWXY2tMJLUSAaqviag5r9L4ma501hrr8BQkkzHOj210VK/uqzwuFjoW0ul8qT3tIlt+z5eVREz6i21bQNc1PLHQFWLBOYiw0Kn4Yu9oFzgP15OkQ4o8gFGBaDcOgplMI1pJOlQKB1mSUKIly33T08WOJL7GMIfI/lSU8fiPqrfXdkyu8yeKxRah80ipkHEPHm6BpJ7YpcrEHGk1hI3IYoaFbzT1IojM03aWcHdbo+hU2gTB5ghoGYTYsJYUVTCFEpVW3yCf67UwQgqqogdTdexE9fNT8eV60mdViN1LTeuLr5HpYoxgP1eeZRnDVmUtTQ1LLSbLDSTsF7IBY6gwrmMYtAFKXzB4bTPabUhbs2i4wa5Ax2W4mzlKwviF1jx/kLurp91JVTB9Qb7XqlZaidssDS3GqVJVG1ETfkZYaM1quhTDDfQYonET845FWNFEyctdNIMokeERTmGoROWBynrg4Jca9CqVoCM1oHpEi6YgGFP8uC1HhxMoFpN5kqqkYRJrTAruxRbPbGa5BEqpozaclP1mGCVz/WkYvGIWGIpmE1i9nWatDR+DEKNrn+RD7BZHyW5b7uJkDsFuoVpTVOYxB9LsYGUrMLstxplBFBTOpBJp2VPHrAegsvrr1azQia5VTUhJMuEttNORjlqyNfOihLG98cZNBbtMvL+OkYyIrEYNE4UTke+OGm00dpTwKuDgmIzLbjbz+nakG8ZF9pXvojRZXjYQSpjx+HxCUTK3RTfSwOcpIOntu5nE6G+KVQkkOpVOXGoKs/rygOtRofCoTy3EMu0MRxsxcwl2jOWS0F2BFyBzfvkWepVDCg8t6MQXNSG9gyiG1i1ZaxURgz5MreuU6z0Fvrp/Rretut3LwPc7Un3aoBqorMu21oWpRyRWPLBOhQZWgQjDh1FCBHOGOJmC2NaiOgqzGsUqQhrgyHdYcHA+fkTp3y3pWJXq3KcYFRN7rpM5z60LcY84D2YH9sQhLoqrNRywJLAUFa+OhRYzmKso6lgthEz22mQKFV1jCoyaZGSDzfBpcFgAqnUesa1aU6Rq7It6qvcUkBKSymStKXH/9dpgJMuzETIZQ8dk0kGqJUap8GXHyqE5XLzZiJCnnYpigExBVpchfMJhihpEjWmoBLCVtVwVOoUK72UjSwjRVGY2E9v1eaYVfizTwfUxIRa7cGIfsqsBylB53pSX16fEvMr+6ja7+cQCiJy5htN5hoJ7ShAMNU6DEFcTpb2sNkAg0MF3qNTmkxpotY0OulgnR/2V3q74kBZ+br6csk9Vrl7qRe2XfOVEojeotF8rxswSVR8qwdQW6rjrW/Cja2D8wQHg8UWA+ywiyYjUhIQfC8HQpSgkzZR1PIULSnLG4dVmn7h2MxyNtKc1IEmQhkTWDB1QxwX4xy12eSeCMBeLnZ9WfM4z1AzrjhWCoq42m+qaimPc5amUswlhqlGRCOO0WU7TULxhMXlPYps4NenhaWGIpA7EB2jm210Y4qcoPMcervj74eKNSM7aYffZ8V7r+9VBrhjp+N+RjW3GPEYn9NNmJ8gnMItg5lGa5RNyQbrkA9JjAuTbbpS7tRRg7jR8tIQpbZxCLUWyJzQHaZsZgVD54290J5SVGm7bJGT2A0NuF8D3PHAyqi1ptR4ESKB/2VwGHE0jKLdiJlpJLS1Fxt3pXyu8kYkLsfmQ1w+8OlMmfQ6IReFi1vErWm0iknF+tWxZR4aBpbKsCq1XThSa5dtxx/3HiG2FmPbDHB5mMnEJyt7whO83F6NkS0eQU1YzVWpCWtPLwqTJRjlMMph000k71E2BWKnA6Cc+yKm0fZMa92srX4tGcxCJkI3t2xmBf2iwNow7lnK0pZUKqmBMmoXOOdepA2p+5EtFbdS4zhVLQT79bcOo6FjNHNxRKeREOvQ/q9VRX4PW4HkffK0X/ElnYC4fLSzLelAo4UlQmEQVVQD5qOJucCxVqOCQ7b0aycZ4Fa3sZNt1DmLkwpatRIMcOIPjTHS9Z4NT+1Ay1bBE9ZD89aZi5KMIMqhlCN2gnIFRT6gSPtEuiAO4drpoO9nInTUIo6ansYV+B5ImKdQCotm6ByDtKCbFfScUDg12uBUJuGqjsONRgvdhFy4Kq6CJ6nnVHWS+tgujtLL4ucyPDNbaBpLO0noJAlNrYnDa7sajqkCpufyIS7LEfEPLV7TOReNEKHjFipuIyYK17LUrbej0dSyP14jutY9n5LJJFPZid83kTa2BxhrqwFOtNQJ+OD9YIOTcEK1ZVxypHZankYJs/g+f/S54RCX96DIMKJROgxi6yAXpxJ01EDHDbSJwvCMHve3SihQpFYYFpZBUTDIcgoRCspdGbrGyNbhXxVuwofdllSPfR6pYBQRh7gCRUFsNIkyNKPwiCMaRoVl4GUe6saIFliLLVKKYgg2w4RwLKrUUVRIFGOSDjpq4IJwm9siLjXu1VSVi8seAfO9GuBejG+8FbfbC96HASKyp5BdMuvVFk+oqkn72vnTgNhgjAU26+OyIdoVRNqTEiQML4mOsBhMFBNFTT8KqqLaxQtGG7yCC1SrTCyZdQwLSxa4fdbh8UjKh2wD+0TGdRXLlMLTwXx+ZbQiNoo4MjQMJEYTG0Oj1neQQHkSXc7vBpFMW2CzjKJIUVL4zofz61IdhjyobOmoiUmaiIkoXAC1KxDeH0Rd4ziWUcdtUTS4HwPcrUjZswGu7JQD1p8suOo9heF7GOCYaHXtVOpRyVjTYPFDPlKLiEZAqwJchk1TVDHAiB2RiStytqdRYSJ0lGBM7Jdrqzg05DxbWFVb4anGJ/3kG+RBW6VwQhE8jhM3ymtqd04HertWnk6mDcRaY8K/RbXuTNXeksDGLkWVSsTNWlyeYV2O5JlnBuFA8jAh6Ftp2sQQN/1Dx5VSK8GHS1g/pkR5ruSWvSFWj5HnJhrgtlVeO7CimPBzPxsDvE+A+p5J+pZwXL+BlbOrdQdUhRXWdTPCzLCz6CKDIvd7KyRHqaIqJIyPz55MaiIwCdp4woM2cVnu1DZDMSZWUp8wUzv0Pl09n9ly5VSNKualcVWNF+MpKh4cKsBmiPX0L2wB1nqSQ7lVVMDisE6hdIKKGuio6TeYOoNoh9X4lWhlCK+Mb/QZSoH2qtq9T0HpHVftcn/yddsMcDePNen7O7Xo6mDufVfN9V5yOeCjRmQD5P/X2rUtpw7DwJXs0J7//9hecKzzINmWjR0SKDPMtB3SAFF0Xe0yKh2LQ25zzqD0i5S+kNM3SO6IJIg2uiJu/XuVrWJQiCC2Z4wmgVU8ZB9eB6rHFoW94FN/JWx3RVCZsTwHqygiOaek1eyedIa7J7Ri2XgURRvSOwF7iOBgaUX8QK7GRpWmGPa3Sv9RGs1WxAivORSPJjbPpjx5YXyrQQaNjejL/fwhL5y53xXFhx/QS0d54bxJpoqwpq4zRK5aTo68w5aiJEHSN+T+pXJiOWNjUoE9Q0kXYxbb3hNSkeXAEcQbmKOG77IoD3p430Md3COS0bj5BEq0rvE2Yd+/9X3t2mQOlpMWsEGggJyNzV/Rk+CwqTrV9gkJW8/rJ57OuMWSEuKp9vhkPaueQb3ORLAh7J5pPI+PiDcex1qzJ2aDqOoGa0iX0Cgy74ojh8Culsvg7R/49oF0/wFSQkq/2mczBUgNz8EKEgHRDuSEvH+bGB8bni9UdabAH7WNV9nzZ6uG6r6x73f14lIWIzNIdiXwrHNqqru/SRR+/5s03eB4A4eIEG+qy0KbykcIDcG/v8UfvBv9HXRq2pC+kPfN7CTixB1x1kUfvv4VA4dB809UYR7bl0nzPr59gDcFOuT0g7wnSE4mXJ21YICAjeZCCefMg2RBNlo5IkZO9+avaQjFvnHrqmBkcl0EqUVUpkKrFiAS6nI3ISJ83jQ9CBvAQVdYTQRGckPSPFwLWTfCjtQql2wYi2lQP1Z8zfimYISzI6Ujj3c4NZnlFEMl0lO3coX2+yq5g4SR/6KktXDMaJka4plNWI/yrks5+49KjWXzVrZjoue1sG4VuNScrsHkaVr8S/OOmXVJv9ARdluHGlozBZAVRASAwoYQApIQEsXGDmufgWYA2ezqVlqjfI74v0/n53UPWZ6CDM4+4jvh1wNZZxVSU0TCQGMhfcFBz0P1jkJ7MYSa4fwQz9vcwtQOaQtKHMDhs2145x15T/oUM0Zpm2oQzeNKOCY30Xi8AOJg6gAJu9EfgTiCgz4DWa5pe9UJJvRdABPsQtwJa5GLULIjY5PJZxORtw3usgFeDbXrWIrjBePh99J4qROxsl1XLg5RV6DMWju1b2z/KAvX9ghJyaKyeqBQGKmVGB2mT1zJ0pEaIliaME434eFCJadERyZapT8ba1YBexawaZbKdmjSDW6CUrt0hPMae38EGjuJin/3HBGTu2bczn8VBfJYBU8amDICE/r5MNEw2PejpXKEPMKHVFivbSPCjcbYxPe4zdMAUm5qgjOUsKGjf0HT/i3HlgE+l2Ulq7Ir77ygKkmVc3WMrQTHHzhSfjS4FK283QFyRxbs9SvAyGzURo6d4Wjb7dSYdoKIiZ6b+dUm5BEU58qi07QPOWkR1JRn8n0IuRpRDm6YxcUb9c78CamTyyxG1zPpF+/60PQwqrkJAUc/inQ3S/Yd47Ih55ZEaKFI+WoP9ijsXmkyXzl/pElOt7LYMed7xSuupiazY5bqPs4zFzlXmhQE48u9GHPR1BDy3eQS7/uhiGL1cvVEJJ1V1WNJ2rontSRiGHbRciyJoZ/IGR37rDjX2XqTeNoAlqP+7PCzd0g+B6+LRIt8/+Uc8KitMeuYPxvHdZVsUf7Gc7q3s/lmDxczdlDvGEqeiBPbWh67R486Ax3/A/UXxJXhnclNzyY0eFgHDRzsUobwXPqkdfpzMR3rAMIHQ4PDHH+BgJGL4N3Z9Y1n3fNhWFy8kSkYsSNbPH/OaYj3M1ca2iFwG2XDmLCH46NjwcJK49YJJzYC0myI7lXxSQ9pdMfrTBNrp547waWdbw8JzhwjDmz6bNAwk1e7knKJCP4DZVlI6BMrI5IAAAAASUVORK5CYII=" alt="Baby on the Way Logo" style={{ width: '52px', height: '52px', objectFit: 'contain', imageRendering: 'crisp-edges' }}/>
              </div>
              <div className="logo-text">
                Baby on the Way
                <span>we are in this together</span>
              </div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <button onClick={() => setNotifOpen(true)} style={{ background:"rgba(255,255,255,0.18)", border:"none", borderRadius:10, width:38, height:38, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", fontSize:18, position:"relative" }}>
                🔔
                {Object.values(notifSettings).some(Boolean) && <span style={{ position:"absolute", top:5, right:5, width:7, height:7, background:palette.mustard, borderRadius:"50%", border:"1.5px solid white" }} />}
              </button>
            <div className="mode-toggle">
              <button className={`mode-btn ${mode === "mother" ? "active" : ""}`} onClick={() => setMode("mother")}>Mother</button>
              <button className={`mode-btn ${mode === "partner" ? "active" : ""}`} onClick={() => setMode("partner")}>Partner</button>
            </div>
            </div>
          </div>
          <div className="week-display">
            <div className="week-label">Week</div>
            {editingWeek ? (
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <input
                  className="week-edit-input"
                  type="number" min="1" max="40"
                  value={weekInput}
                  onChange={e => setWeekInput(e.target.value)}
                  onBlur={() => { const w = Math.max(1,Math.min(40,parseInt(weekInput)||24)); setCurrentWeek(w); setWeekInput(String(w)); setEditingWeek(false); }}
                  onKeyDown={e => { if(e.key==="Enter"){ const w=Math.max(1,Math.min(40,parseInt(weekInput)||24)); setCurrentWeek(w); setWeekInput(String(w)); setEditingWeek(false); }}}
                  autoFocus
                  style={{ width:60, fontSize:32, fontWeight:700, background:"rgba(255,255,255,0.25)", border:"2px solid rgba(255,255,255,0.6)", borderRadius:10, color:"white", textAlign:"center", outline:"none" }}
                />
                <span style={{ color:"rgba(255,255,255,0.8)", fontSize:13 }}>/ 40</span>
              </div>
            ) : (
              <div className="week-number" onClick={() => { setEditingWeek(true); setWeekInput(String(currentWeek)); }} style={{ cursor:"pointer" }} title="Tap to edit week">
                {currentWeek} <span style={{ fontSize:14, opacity:0.7 }}>✏️</span>
              </div>
            )}
            <div className="week-sub">{40 - currentWeek} weeks to go · {currentWeek <= 13 ? "1st" : currentWeek <= 26 ? "2nd" : "3rd"} Trimester</div>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-labels"><span>Week 1</span><span>{pct}% complete</span><span>Week 40</span></div>
          </div>
        </div>

        {/* Content */}
        <div className="content scroll-content">

          {/* HOME */}
          {tab === "home" && (
            <>
              <div className="notif-banner">
                <div className="notif-dot" />
                <div className="notif-text">
                  {mode === "partner"
                    ? <><strong>Action needed:</strong> Sarah just added "Hospital Bag Checklist" to the village list.</>
                    : <><strong>Today's tip:</strong> Sleep on your left side to improve circulation for baby.</>}
                </div>
              </div>

              {/* Baby card */}
              <div className="card baby-card">
                <span className="baby-emoji">{weekData.emoji}</span>
                <div className="baby-size-label">Baby is growing fast!</div>
                <div className="baby-comparison">
                  🍽️ Size of a {weekData.babySize}
                </div>
                {mode === "partner" && (
                  <div style={{ fontSize: 12, color: palette.terra, marginTop: 6 }}>
                    Dad ref: about the length of a baseball bat handle 🏏
                  </div>
                )}
                <div className="baby-stats">
                  <div className="baby-stat">
                    <div className="baby-stat-value">{weekData.length}</div>
                    <div className="baby-stat-unit">Length</div>
                  </div>
                  <div className="baby-stat">
                    <div className="baby-stat-value">{weekData.weight}</div>
                    <div className="baby-stat-unit">Weight</div>
                  </div>
                  <div className="baby-stat">
                    <div className="baby-stat-value">W{weekData.week}</div>
                    <div className="baby-stat-unit">Today</div>
                  </div>
                </div>
              </div>

              {/* Mode-specific content */}
              {mode === "partner" ? (
                <div className="card dad-tip-card">
                  <div className="dad-tip-header">
                    <span style={{ fontSize: 20 }}>💪</span>
                    <div className="dad-badge">How you can help this week</div>
                  </div>
                  <div className="dad-tip-text">{weekData.dadTip}</div>
                  <div className="dad-tip-action">
                    <div className="tip-action-icon">🎥</div>
                    <div>
                      <div className="tip-action-text">2-min Massage Technique</div>
                      <div className="tip-action-sub">Lower back relief · No experience needed</div>
                    </div>
                    <span style={{ marginLeft: "auto", color: palette.terra }}>→</span>
                  </div>
                </div>
              ) : (
                <div className="card">
                  <div className="card-title">🌡️ How are you feeling?</div>
                  <div className="symptom-chips">
                    {weekData.symptoms.map(s => (
                      <div key={s} className="chip chip-active">
                        <span>●</span> {s}
                      </div>
                    ))}
                    <div className="chip chip-mild">+ Log new</div>
                  </div>
                </div>
              )}

              <div className="card">
                <div className="card-title">📋 This week's checklist</div>
                {checks.slice(0, 3).map(item => (
                  <div key={item.id} className={`checklist-item ${item.done ? "done" : ""}`} onClick={() => toggle(item.id)}>
                    <div className={`checkbox ${item.done ? "checked" : ""}`}>
                      {item.done && <span style={{ color: "white", fontSize: 12 }}>✓</span>}
                    </div>
                    <div>
                      <div className={`check-text ${item.done ? "done-text" : ""}`}>{item.text}</div>
                      <div className="check-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
                <div style={{ textAlign: "center", marginTop: 10, fontSize: 13, color: palette.sage, cursor: "pointer", fontWeight: 500 }}
                  onClick={() => setTab("team")}>
                  See all tasks →
                </div>
              </div>

              {/* ── Meet other parents card ── */}
              <div className="meet-home-card" onClick={() => { if (!profile) setOnboarding(true); else setMeetOpen(true); }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                  <div style={{ fontSize:32 }}>💛</div>
                  <div>
                    <div style={{ fontFamily:"'Fraunces',serif", fontSize:17, fontWeight:700, color:palette.charcoal }}>Meet other parents</div>
                    <div style={{ fontSize:12, color:palette.muted, marginTop:2 }}>Find your village nearby</div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:-8 }}>
                  {["🤰","👩‍🦱","👫","👩"].map((a,i) => (
                    <div key={i} style={{ width:32, height:32, borderRadius:"50%", background:"white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, marginLeft: i>0 ? -8 : 0, border:"2px solid white", boxShadow:"0 2px 8px rgba(0,0,0,0.1)" }}>{a}</div>
                  ))}
                  <div style={{ width:32, height:32, borderRadius:"50%", background:palette.sage, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:"white", marginLeft:-8, border:"2px solid white" }}>+24</div>
                </div>
                <div style={{ marginTop:12, fontSize:12, color:palette.teal, fontWeight:600 }}>
                  {profile ? `${mockParents.length - swipeIdx} parents nearby →` : "Create your profile to start →"}
                </div>
              </div>

            </>
          )}

          {/* BABY GROWTH */}
          {tab === "baby" && (
            <>
              <div className="section-heading">Baby's Journey</div>
              <div className="card baby-card">
                <span className="baby-emoji" style={{ fontSize: 90 }}>{weekData.emoji}</span>
                <div className="baby-size-label" style={{ fontSize: 26 }}>Week {weekData.week}: {weekData.babySize}</div>
                <div style={{ fontSize: 13, color: palette.muted, marginTop: 8, maxWidth: 280, margin: "8px auto 0", lineHeight: 1.6 }}>
                  Baby's lungs are developing surfactant. Hearing is sharp — she can recognize your voice now.
                </div>
                <div className="baby-stats" style={{ marginTop: 20 }}>
                  <div className="baby-stat"><div className="baby-stat-value">{weekData.length}</div><div className="baby-stat-unit">Length</div></div>
                  <div className="baby-stat"><div className="baby-stat-value">{weekData.weight}</div><div className="baby-stat-unit">Weight</div></div>
                </div>
              </div>
              {[
                { icon: "🧠", title: "Brain Development", text: "Rapid neuron connection forming. Read aloud or play music — baby can hear it all." },
                { icon: "👁️", title: "Eyes Opening", text: "Eyelids are preparing to open. Baby responds to light through the belly." },
                { icon: "🦷", title: "Bone Density", text: "Calcium is key this week. Dairy, almonds, and leafy greens all help." },
              ].map(m => (
                <div key={m.title} className="card">
                  <div className="card-title">{m.icon} {m.title}</div>
                  <div style={{ fontSize: 13, color: palette.text, lineHeight: 1.6 }}>{m.text}</div>
                </div>
              ))}
            </>
          )}

          {/* SHOP */}
          {tab === "shop" && (
            <>
              <div className="section-heading">Smart Shopping Guide</div>
              <div className="card" style={{ background: palette.sandLight, border: "none", marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: palette.terra, fontWeight: 500 }}>
                  🎯 Assign items to team members and add links to your preferred brands.
                </div>
              </div>
              <div className="trimester-tabs">
                {[1, 2, 3].map(t => (
                  <button key={t} className={`trim-tab ${trimester === t ? "active" : ""}`} onClick={() => setTrimester(t)}>
                    T{t} · {["Early", "Middle", "Late"][t - 1]}
                  </button>
                ))}
              </div>
              <div className="card">
                {(shopItems[trimester] || []).map(item => {
                  const assignedMember = item.assignee ? teamMembers.find(m => m.id === item.assignee) : null;
                  return (
                    <div key={item.id} className="shop-item" style={{ opacity: item.bought ? 0.55 : 1 }}>
                      <div className="shop-item-top">
                        <div className="shop-emoji">{item.emoji}</div>
                        <div className="shop-item-body">
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div className="shop-name" style={{ textDecoration: item.bought ? "line-through" : "none" }}>{item.name}</div>
                            <div className={`shop-priority priority-${item.priority}`}>
                              {item.priority === "high" ? "🔴" : item.priority === "soon" ? "🟡" : "🟢"}
                            </div>
                          </div>
                          <div className="shop-why">{item.why}</div>
                        </div>
                      </div>
                      <div className="shop-item-bottom">
                        {/* Assignee */}
                        <div
                          className={`assignee-chip ${assignedMember ? "assigned" : "unassigned"}`}
                          onClick={() => { setEditingItem({ ...item, trim: trimester }); setEditLink(item.link); setEditAssignee(item.assignee); }}
                        >
                          {assignedMember ? <><span>{assignedMember.avatar}</span><span>{assignedMember.name}</span></> : <><span>👤</span><span>Assign</span></>}
                        </div>
                        {/* Link */}
                        {item.link
                          ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="shop-link-chip" onClick={e => e.stopPropagation()}>🔗 {item.link.replace(/https?:\/\/(www\.)?/, "").split("/")[0]}</a>
                          : <div className="shop-add-link" onClick={() => { setEditingItem({ ...item, trim: trimester }); setEditLink(""); setEditAssignee(item.assignee); }}>＋ Add link</div>
                        }
                        {/* Bought toggle */}
                        <button
                          className={`shop-bought-btn ${item.bought ? "done" : "pending"}`}
                          onClick={() => updateShopItem(trimester, item.id, { bought: !item.bought })}
                        >
                          {item.bought ? "✓ Bought" : "Mark bought"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Progress summary */}
              {(() => {
                const all = shopItems[trimester] || [];
                const done = all.filter(i => i.bought).length;
                return (
                  <div className="card" style={{ background: palette.sagePale, border: "none", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: palette.muted, marginBottom: 4 }}>T{trimester} Progress</div>
                      <div style={{ background: palette.sageLight, borderRadius: 6, height: 6 }}>
                        <div style={{ width: `${all.length ? (done/all.length)*100 : 0}%`, background: palette.sage, height: 6, borderRadius: 6, transition: "width 0.4s" }} />
                      </div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: palette.sageDark }}>{done}/{all.length} bought</div>
                  </div>
                );
              })()}
              {trimester === 2 && (
                <div className="card dad-tip-card">
                  <div className="card-title">🛒 Stroller Deep Dive</div>
                  <div style={{ fontSize: 13, color: palette.text, lineHeight: 1.6 }}>
                    <strong>All-terrain</strong> (e.g., Bugaboo Fox): For parks, gravel, active parents. Heavier but smoother ride.<br/><br/>
                    <strong>Lightweight</strong> (e.g., Babyzen Yoyo): City apartments, public transport, travel. Folds into overhead bin.<br/><br/>
                    <strong>Travel system</strong>: Car seat + stroller combo — best value for first-time parents.
                  </div>
                </div>
              )}
            </>
          )}

          {/* VILLAGE */}
          {/* TRACK */}
          {tab === "track" && (
            <>
              <div className="section-heading">👶 Baby Tracker</div>

              {/* Kick Counter */}
              <div className="card" style={{ marginBottom: 20 }}>
                <div className="card-title">🦵 Kick Counter</div>
                <div style={{ fontSize: 13, color: palette.muted, marginBottom: 16, lineHeight: 1.5 }}>
                  Count kicks until you reach {kickGoal}. A healthy baby usually kicks 10 times in 2 hours.
                </div>
                <button
                  onClick={() => {
                    if (!kickSessionStart) setKickSessionStart(new Date());
                    if (kicks.length < kickGoal) setKicks(prev => [...prev, new Date()]);
                  }}
                  style={{
                    width: 160, height: 160, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${palette.sage}, ${palette.teal})`,
                    border: "none", cursor: "pointer", display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", margin: "0 auto",
                    boxShadow: `0 8px 32px ${palette.sage}44`
                  }}
                >
                  <div style={{ fontSize: 52, fontWeight: 700, color: "white", fontFamily: "'Fraunces', serif", lineHeight: 1 }}>
                    {kicks.length}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>
                    {kicks.length >= kickGoal ? "🎉 Done!" : "Tap each kick"}
                  </div>
                </button>
                <div style={{ margin: "16px 0 8px", background: palette.sageLight, borderRadius: 8, height: 8, overflow: "hidden" }}>
                  <div style={{ height: 8, borderRadius: 8, background: `linear-gradient(90deg, ${palette.sage}, ${palette.teal})`, width: `${Math.min(100, (kicks.length / kickGoal) * 100)}%`, transition: "width 0.4s" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: palette.muted, marginBottom: 12 }}>
                  <span>{kicks.length}/{kickGoal} kicks</span>
                  {kickSessionStart && <span>Started {kickSessionStart.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                  {Array.from({ length: kickGoal }).map((_, i) => (
                    <div key={i} style={{
                      width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 15,
                      background: i < kicks.length ? palette.sage : "white",
                      border: `2px solid ${i < kicks.length ? palette.sage : palette.sageLight}`,
                      color: i < kicks.length ? "white" : palette.muted
                    }}>
                      {i < kicks.length ? "✓" : "·"}
                    </div>
                  ))}
                </div>
                {kicks.length > 0 && (
                  <button onClick={() => { setKicks([]); setKickSessionStart(null); }}
                    style={{ marginTop: 8, width: "100%", padding: "10px", borderRadius: 12, border: `1.5px solid ${palette.sageLight}`, background: "white", color: palette.muted, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>
                    Reset session
                  </button>
                )}
              </div>

              {/* Contraction Timer */}
              <div className="card" style={{ marginBottom: 20 }}>
                <div className="card-title">⏱ Contraction Timer</div>
                <div style={{ fontSize: 13, color: palette.muted, marginBottom: 16, lineHeight: 1.5 }}>
                  Tap when a contraction starts, tap again when it ends.
                </div>
                {contracting && (
                  <div style={{ textAlign: "center", marginBottom: 12 }}>
                    <div style={{ fontSize: 48, fontWeight: 700, fontFamily: "'Fraunces', serif", color: palette.terra }}>
                      {Math.floor(contractionElapsed / 60).toString().padStart(2, "0")}:{(contractionElapsed % 60).toString().padStart(2, "0")}
                    </div>
                    <div style={{ fontSize: 12, color: palette.terra, fontWeight: 600, letterSpacing: 1 }}>CONTRACTION IN PROGRESS</div>
                  </div>
                )}
                <button
                  onClick={() => {
                    if (!contracting) {
                      setContracting(true);
                      setContractionStart(new Date());
                      setContractionElapsed(0);
                      const t = setInterval(() => setContractionElapsed(e => e + 1), 1000);
                      window._cTimer = t;
                    } else {
                      clearInterval(window._cTimer);
                      const dur = contractionElapsed;
                      const prev = contractions[contractions.length - 1];
                      const interval = prev ? Math.round((new Date() - prev._endTime) / 1000) : null;
                      setContractions(prev2 => [...prev2, { id: Date.now(), duration: dur, interval, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), _endTime: new Date() }]);
                      setContracting(false);
                      setContractionElapsed(0);
                    }
                  }}
                  style={{
                    width: "100%", padding: 18, borderRadius: 18, border: "none", cursor: "pointer",
                    fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600,
                    background: contracting ? `linear-gradient(135deg, ${palette.terra}, #E07A50)` : palette.sand,
                    color: contracting ? "white" : palette.charcoal, transition: "all 0.2s"
                  }}
                >
                  {contracting ? "⏹ End contraction" : contractions.length === 0 ? "▶ Start timing" : "▶ Next contraction"}
                </button>
                {contractions.length > 0 && (
                  <div style={{ marginTop: 16 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: palette.muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Recent</div>
                    {[...contractions].reverse().slice(0, 5).map(c => (
                      <div key={c.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${palette.sagePale}` }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: palette.charcoal }}>{c.time}</div>
                          {c.interval && <div style={{ fontSize: 11, color: palette.muted }}>Every {Math.floor(c.interval / 60)}m {c.interval % 60}s</div>}
                        </div>
                        <div style={{ background: `${palette.terra}18`, color: palette.terra, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 600 }}>
                          {Math.floor(c.duration / 60)}:{(c.duration % 60).toString().padStart(2, "0")}
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setContractions([])} style={{ marginTop: 10, width: "100%", padding: 10, borderRadius: 12, border: `1.5px solid ${palette.sageLight}`, background: "white", color: palette.muted, fontSize: 13, cursor: "pointer" }}>
                      Clear all
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {tab === "team" && (
            <>
              <div className="section-heading">The Team</div>
              <div className="notif-banner">
                <div className="notif-dot" />
                <div className="notif-text"><strong>James</strong> just checked off "Order crib mattress" ✓</div>
              </div>
              <div className="card">
                <div className="card-title">🏥 Hospital Bag Essentials</div>
                {checks.map(item => (
                  <div key={item.id} className={`checklist-item ${item.done ? "done" : ""}`} onClick={() => toggle(item.id)}>
                    <div className={`checkbox ${item.done ? "checked" : ""}`}>
                      {item.done && <span style={{ color: "white", fontSize: 12 }}>✓</span>}
                    </div>
                    <div>
                      <div className={`check-text ${item.done ? "done-text" : ""}`}>{item.text}</div>
                      <div className="check-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
                <div className="team-invite">
                  <span>➕</span> Invite team members
                </div>
              </div>
              <div className="card">
                <div className="card-title">👥 Team Members</div>
                {[
                  { name: "Sarah (You)", role: "Mother", avatar: "👩", active: true },
                  { name: "James", role: "Partner", avatar: "👨", active: true },
                  { name: "Grandma Lisa", role: "Invited", avatar: "👵", active: false },
                ].map(m => (
                  <div key={m.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${palette.sagePale}` }}>
                    <div style={{ width: 40, height: 40, background: palette.sagePale, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{m.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: palette.charcoal }}>{m.name}</div>
                      <div style={{ fontSize: 11, color: palette.muted }}>{m.role}</div>
                    </div>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: m.active ? palette.sage : palette.muted }} />
                  </div>
                ))}
                <div className="team-invite" style={{ marginTop: 12 }} onClick={() => { setInviteOpen(true); setInviteStep(1); setInviteCopied(false); }}>
                  <span>📨</span> Invite to team
                </div>
              </div>
            </>
          )}


          {/* PHOTOS */}
          {tab === "photos" && (
            <>
              <div className="section-heading">📸 Baby's Story</div>
              {/* Upload button */}
              <div className="add-photo-btn" onClick={() => setPhotoModalOpen(true)}>
                <span style={{ fontSize: 20 }}>＋</span> Add Photo
              </div>

              {/* Filter chips */}
              <div className="photo-filter-bar">
                {["All", "Ultrasound", "Bump", "Birth", "Milestone"].map(f => (
                  <div key={f} className={`photo-filter-chip ${photoFilter === f ? "active" : ""}`} onClick={() => setPhotoFilter(f)}>{f}</div>
                ))}
              </div>

              {/* Timeline groups */}
              {(() => {
                const filtered = photoFilter === "All" ? photos : photos.filter(p => p.type === photoFilter);
                const groups = {};
                filtered.forEach(p => {
                  const key = p.type === "Birth" || p.type === "Milestone" ? "After Birth 👶" : "During Pregnancy 🤰";
                  if (!groups[key]) groups[key] = [];
                  groups[key].push(p);
                });
                return Object.entries(groups).map(([group, items]) => (
                  <div key={group}>
                    <div className="photo-timeline-label">{group}</div>
                    <div className="photo-grid">
                      {items.map(photo => (
                        <div key={photo.id} style={{ display: "flex", flexDirection: "column" }}>
                          <div className="photo-card" onClick={() => setLightboxPhoto(photo)}>
                            {photo.img
                              ? <img src={photo.img} alt={photo.caption} />
                              : <div className="photo-card-placeholder">
                                  <span className="photo-placeholder-icon">{photo.emoji}</span>
                                  <span className="photo-placeholder-text">{photo.week}</span>
                                </div>
                            }
                            <div className={`photo-badge ${photo.type.toLowerCase()}`}>{photo.week}</div>
                            <div className="photo-heart" onClick={e => { e.stopPropagation(); toggleLike(photo.id); }}>
                              {photo.liked ? "❤️" : "🤍"}
                            </div>
                          </div>
                          <div className="photo-caption">{photo.caption}</div>
                          <div style={{ fontSize: 10, color: "#aaa", marginTop: 2, paddingLeft: 2 }}>{photo.date} · {photo.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })()}

              {photos.filter(p => photoFilter === "All" || p.type === photoFilter).length === 0 && (
                <div style={{ textAlign: "center", padding: "40px 20px", color: palette.muted }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>📷</div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, marginBottom: 6, color: palette.charcoal }}>No {photoFilter} photos yet</div>
                  <div style={{ fontSize: 13 }}>Tap "Add Photo" to create your first memory</div>
                </div>
              )}
            </>
          )}

          {/* WISHES */}
          {tab === "wishes" && (
            <>
              <div className="section-heading">💌 Send a Wish</div>
              {/* Quick wish buttons */}
              <div className="card" style={{ padding: "14px" }}>
                <div className="card-title" style={{ marginBottom: 10 }}>✨ Quick feelings</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {quickWishes.map((q, i) => (
                    <div
                      key={i}
                      className={`wish-quick-btn ${selectedQuick === i ? "selected" : ""}`}
                      style={{ minWidth: "calc(33% - 6px)", maxWidth: "calc(33% - 6px)" }}
                      onClick={() => { setSelectedQuick(i); setWishInput(q.text); }}
                    >
                      <span className="wish-icon">{q.icon}</span>
                      <span className="wish-label">{q.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="card" style={{ padding: "14px 14px 8px" }}>
                <div className="card-title" style={{ marginBottom: 12 }}>💬 Messages</div>
                {wishes.map(w => (
                  <div key={w.id} className={`wish-bubble ${w.mine ? "mine" : ""}`}>
                    <div className="wish-avatar">{w.avatar}</div>
                    <div className="wish-body">
                      <div className="wish-sender">{w.from}</div>
                      <div className="wish-text">{w.text}</div>
                    </div>
                  </div>
                ))}
                {/* Input row */}
                <div className="wish-input-row">
                  <textarea
                    className="wish-input"
                    rows={2}
                    placeholder="Type a wish or feeling…"
                    value={wishInput}
                    onChange={e => setWishInput(e.target.value)}
                  />
                  <button className="wish-send-btn" onClick={() => sendWish(wishInput)}>➤</button>
                </div>
              </div>

              {/* Emergency SOS */}
              <div className="card" style={{ background: "#FFF5F5", border: "1.5px solid #FFCCCC", textAlign: "center", padding: "24px 18px" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, color: "#C42020", marginBottom: 6 }}>
                  🚨 Emergency Alert
                </div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 18, lineHeight: 1.5 }}>
                  Instantly notifies everyone in your Village list
                </div>
                <div className="sos-btn-wrap">
                  <button className={`sos-btn ${sosArmed ? "armed" : ""}`} onClick={() => { setSosOpen(true); setSosSent(false); }}>
                    {sosArmed && <div className="sos-ring" />}
                    <span className="sos-label">SOS</span>
                    <span className="sos-sub">Hold to alert</span>
                  </button>
                  <div className="sos-hint">
                    {sosArmed ? "✅ Alert sent to 3 contacts" : "Tap to open emergency panel"}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>


        {/* Add Photo Modal */}
        {photoModalOpen && (
          <div className="photo-modal-overlay" onClick={() => setPhotoModalOpen(false)}>
            <div className="photo-modal" onClick={e => e.stopPropagation()}>
              <h3>📸 Add a Memory</h3>

              {/* Type selector */}
              <div className="photo-type-grid">
                {[
                  { type: "Ultrasound", icon: "🩻", desc: "Scan & sonogram photos" },
                  { type: "Bump", icon: "🤰", desc: "Belly growth photos" },
                  { type: "Birth", icon: "👶", desc: "Delivery & first moments" },
                  { type: "Milestone", icon: "⭐", desc: "Firsts — smile, steps & more" },
                ].map(t => (
                  <div key={t.type} className={`photo-type-btn ${newPhotoType === t.type ? "sel" : ""}`} onClick={() => setNewPhotoType(t.type)}>
                    <span className="photo-type-icon">{t.icon}</span>
                    <div className="photo-type-name">{t.type}</div>
                    <div className="photo-type-desc">{t.desc}</div>
                  </div>
                ))}
              </div>

              {/* Smart date tagging */}
              <div className="photo-meta-row">
                <input
                  className="photo-meta-input"
                  placeholder={newPhotoType === "Birth" || newPhotoType === "Milestone" ? "e.g. Day 3 / Month 2" : "e.g. Week 20"}
                  value={newPhotoWeek}
                  onChange={e => setNewPhotoWeek(e.target.value)}
                />
                <input
                  className="photo-meta-input"
                  placeholder="Caption…"
                  value={newPhotoCaption}
                  onChange={e => setNewPhotoCaption(e.target.value)}
                />
              </div>

              {/* Upload zone */}
              <label className="photo-upload-zone">
                {newPhotoPreview
                  ? <img src={newPhotoPreview} className="photo-preview" alt="preview"/>
                  : <>
                      <div style={{ fontSize: 36, marginBottom: 8 }}>🖼️</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: palette.sage }}>Tap to choose photo</div>
                      <div style={{ fontSize: 11, color: palette.muted, marginTop: 4 }}>JPG, PNG or HEIC</div>
                    </>
                }
                <input type="file" accept="image/*" onChange={handlePhotoUpload} />
              </label>

              <button className="photo-save-btn" onClick={savePhoto} disabled={!newPhotoType}>
                Save Memory ✓
              </button>
              <button className="photo-cancel-btn" onClick={() => { setPhotoModalOpen(false); setNewPhotoPreview(null); setNewPhotoType(null); }}>Cancel</button>
            </div>
          </div>
        )}

        {/* Lightbox */}
        {lightboxPhoto && (
          <div className="lightbox" onClick={() => setLightboxPhoto(null)}>
            <button className="lightbox-close">✕</button>
            {lightboxPhoto.img
              ? <img src={lightboxPhoto.img} alt={lightboxPhoto.caption} />
              : <div className="lightbox-emoji">{lightboxPhoto.emoji}</div>
            }
            <div className="lightbox-info">
              <div className="lightbox-title">{lightboxPhoto.caption}</div>
              <div className="lightbox-meta">{lightboxPhoto.week} · {lightboxPhoto.type} · {lightboxPhoto.date}</div>
            </div>
          </div>
        )}

        {/* Item Edit Drawer */}
        {editingItem && (
          <div className="item-edit-overlay" onClick={() => setEditingItem(null)}>
            <div className="item-edit-drawer" onClick={e => e.stopPropagation()}>
              <div className="item-edit-header">
                <span className="item-edit-emoji">{editingItem.emoji}</span>
                <div>
                  <div className="item-edit-name">{editingItem.name}</div>
                  <div style={{ fontSize: 11, color: palette.muted }}>{editingItem.why}</div>
                </div>
              </div>

              <div className="item-edit-section">👤 Assign to</div>
              <div className="assign-grid">
                {teamMembers.map(m => (
                  <div
                    key={m.id}
                    className={`assign-member-btn ${editAssignee === m.id ? "selected" : ""}`}
                    onClick={() => setEditAssignee(editAssignee === m.id ? null : m.id)}
                  >
                    <span className="assign-member-avatar">{m.avatar}</span>
                    <span className="assign-member-name">{m.name}</span>
                    <span style={{ fontSize: 9, color: palette.muted }}>{m.role}</span>
                  </div>
                ))}
              </div>

              <div className="item-edit-section">🔗 Product link / brand</div>
              <div className="link-input-row">
                <input
                  className="link-input"
                  placeholder="https://amazon.com/..."
                  value={editLink}
                  onChange={e => setEditLink(e.target.value)}
                />
                {editLink && (
                  <a href={editLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 18 }}>🌐</a>
                )}
              </div>

              <button className="item-save-btn" onClick={saveItemEdit}>Save Changes ✓</button>
            </div>
          </div>
        )}



        {/* ───── ONBOARDING ───── */}
        {onboarding && (
          <div className="ob-overlay">
            <div className="ob-header">
              <div className="ob-progress">
                {[1,2,3].map(s => (
                  <div key={s} className="ob-prog-dot" style={{ background: s <= obStep ? "white" : "rgba(255,255,255,0.35)" }} />
                ))}
              </div>
              <div style={{ fontFamily:"'Fraunces',serif", fontSize:22, fontWeight:700, color:"white", marginTop:14 }}>
                {obStep === 1 && "Who are you? 👋"}
                {obStep === 2 && "Your vibe ✨"}
                {obStep === 3 && "Almost there 🌱"}
              </div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,0.8)", marginTop:4 }}>
                {obStep === 1 && "Your profile helps other parents connect with you"}
                {obStep === 2 && "What are you looking for?"}
                {obStep === 3 && "A little about yourself"}
              </div>
            </div>
            <div className="ob-body">
              {obStep === 1 && (
                <>
                  <div className="ob-label">Your avatar</div>
                  <div className="ob-avatar-grid">
                    {["🤰","👩","👨","👫","💑","👩‍🦱","🧕","👩‍🍼"].map(a => (
                      <div key={a} className={`ob-avatar-opt ${obAvatar === a ? "selected" : ""}`} onClick={() => setObAvatar(a)}>{a}</div>
                    ))}
                  </div>
                  <div className="ob-label">Your name</div>
                  <input className="ob-input" placeholder="First name (+ partner if applicable)" value={obName} onChange={e => setObName(e.target.value)} />
                  <div className="ob-label">Your role</div>
                  <div className="ob-role-grid">
                    {["Mother","Partner","Both"].map(r => (
                      <div key={r} className={`ob-role-opt ${obRole === r ? "selected" : ""}`} onClick={() => setObRole(r)}>{r}</div>
                    ))}
                  </div>
                  <div className="ob-label">Neighborhood / area</div>
                  <input className="ob-input" placeholder="e.g. Enskede, Södermalm…" value={obNeighborhood} onChange={e => setObNeighborhood(e.target.value)} />
                </>
              )}
              {obStep === 2 && (
                <>
                  <div className="ob-label">I'm looking for</div>
                  <div className="ob-looking-grid">
                    {["☕ Coffee","🚶 Walk","💬 Chat","🍼 Playdate","🤝 Support"].map(opt => (
                      <div key={opt}
                        className={`ob-looking-opt ${obLooking.includes(opt) ? "selected" : ""}`}
                        onClick={() => setObLooking(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt])}>
                        {opt}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop:24, padding:"14px 16px", background:palette.sagePale, borderRadius:16, fontSize:13, color:palette.muted, lineHeight:1.6 }}>
                    💛 This is what will show on your card when other parents see your profile. You can always update it later.
                  </div>
                </>
              )}
              {obStep === 3 && (
                <>
                  <div className="ob-label">Short bio</div>
                  <textarea className="ob-textarea" placeholder="A line or two about yourself — what you enjoy, your vibe, your situation…" value={obBio} onChange={e => setObBio(e.target.value)} />
                  <div style={{ marginTop:20, padding:"16px", background:palette.sagePale, borderRadius:18 }}>
                    <div style={{ fontFamily:"'Fraunces',serif", fontSize:16, fontWeight:600, color:palette.charcoal, marginBottom:12 }}>Your card preview</div>
                    <div style={{ background:"white", borderRadius:16, overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,0.08)" }}>
                      <div style={{ background:`linear-gradient(145deg,${palette.sagePale},${palette.teal}22)`, padding:"20px 16px", textAlign:"center" }}>
                        <div style={{ width:64, height:64, borderRadius:"50%", background:"white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:34, margin:"0 auto 8px", boxShadow:"0 2px 12px rgba(0,0,0,0.1)" }}>{obAvatar}</div>
                        <div style={{ fontFamily:"'Fraunces',serif", fontSize:18, fontWeight:700, color:palette.charcoal }}>{obName || "Your name"}</div>
                        <div style={{ display:"flex", gap:6, justifyContent:"center", marginTop:6, flexWrap:"wrap" }}>
                          <span style={{ background:"white", borderRadius:12, padding:"3px 10px", fontSize:11, fontWeight:600 }}>Week {currentWeek}</span>
                          {obNeighborhood && <span style={{ background:"white", borderRadius:12, padding:"3px 10px", fontSize:11, fontWeight:600 }}>📍 {obNeighborhood}</span>}
                        </div>
                      </div>
                      <div style={{ padding:"12px 16px" }}>
                        <div style={{ fontSize:13, color:palette.text, lineHeight:1.5, marginBottom:10 }}>{obBio || "Your bio will appear here…"}</div>
                        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                          {obLooking.map(l => <span key={l} style={{ background:palette.sagePale, color:palette.sageDark, padding:"4px 10px", borderRadius:12, fontSize:12, fontWeight:600 }}>{l}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="ob-footer">
              <button
                className="ob-next-btn"
                disabled={obStep === 1 && (!obName.trim() || !obNeighborhood.trim())}
                onClick={() => {
                  if (obStep < 3) { setObStep(s => s + 1); }
                  else {
                    setProfile({ name:obName, avatar:obAvatar, role:obRole, neighborhood:obNeighborhood, bio:obBio, looking:obLooking, week:currentWeek });
                    setOnboarding(false);
                    setMeetOpen(true);
                  }
                }}
              >
                {obStep < 3 ? "Continue →" : "Start meeting parents 💛"}
              </button>
              {obStep > 1 && (
                <div style={{ textAlign:"center", marginTop:12, fontSize:13, color:palette.muted, cursor:"pointer" }} onClick={() => setObStep(s => s - 1)}>← Back</div>
              )}
              {obStep === 1 && (
                <div style={{ textAlign:"center", marginTop:12, fontSize:13, color:palette.muted, cursor:"pointer" }} onClick={() => setOnboarding(false)}>Maybe later</div>
              )}
            </div>
          </div>
        )}

        {/* ───── MEET OVERLAY ───── */}
        {meetOpen && (
          <div className="meet-overlay">
            <div className="meet-header">
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <div style={{ fontFamily:"'Fraunces',serif", fontSize:22, fontWeight:700 }}>Meet Parents 💛</div>
                  <div style={{ fontSize:13, color:"rgba(255,255,255,0.8)", marginTop:2 }}>Parents near {profile?.neighborhood || "you"}</div>
                </div>
                <button onClick={() => setMeetOpen(false)} style={{ background:"rgba(255,255,255,0.2)", border:"none", borderRadius:12, width:40, height:40, cursor:"pointer", fontSize:20, color:"white" }}>✕</button>
              </div>
            </div>

            <div className="meet-card-stack">
              {swipeIdx < parents.length ? (
                <>
                  <div className={`meet-card ${swipeAnim === "left" ? "swipe-left" : swipeAnim === "right" ? "swipe-right" : ""}`}>
                    <div className="meet-card-avatar-block">
                      <div className="meet-card-avatar">{parents[swipeIdx].avatar}</div>
                      <div className="meet-card-name">{parents[swipeIdx].name}</div>
                      <div className="meet-card-meta">
                        <span className="meet-badge">🤰 Week {parents[swipeIdx].week}</span>
                        <span className="meet-badge">📍 {parents[swipeIdx].neighborhood}</span>
                      </div>
                    </div>
                    <div className="meet-card-body">
                      <div className="meet-card-bio">{parents[swipeIdx].bio}</div>
                      <div style={{ fontSize:12, fontWeight:700, color:palette.muted, letterSpacing:1, textTransform:"uppercase", marginBottom:8 }}>Looking for</div>
                      <div className="meet-looking">
                        {parents[swipeIdx].looking.map(l => <span key={l} className="meet-looking-tag">{l}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="swipe-count">{parents.length - swipeIdx} parents left nearby</div>

                  <div className="swipe-actions">
                    <button className="swipe-btn pass" onClick={() => {
                      setSwipeAnim("left");
                      setTimeout(() => { setSwipeIdx(i => i+1); setSwipeAnim(null); }, 320);
                    }}>👎</button>
                    <button className="swipe-btn like" onClick={() => {
                      setSwipeAnim("right");
                      const matched = parents[swipeIdx];
                      setTimeout(() => {
                        setSwipeIdx(i => i+1);
                        setSwipeAnim(null);
                        if (Math.random() > 0.3) setMatchedParent(matched);
                      }, 320);
                    }}>💛</button>
                  </div>
                </>
              ) : (
                <div style={{ textAlign:"center", padding:40 }}>
                  <div style={{ fontSize:56, marginBottom:16 }}>🌱</div>
                  <div style={{ fontFamily:"'Fraunces',serif", fontSize:22, fontWeight:600, color:palette.charcoal, marginBottom:8 }}>You've seen everyone!</div>
                  <div style={{ fontSize:14, color:palette.muted, lineHeight:1.6, marginBottom:24 }}>More parents join every week. Check back soon — your village is growing.</div>
                  <button onClick={() => { setSwipeIdx(0); setParents(mockParents); }} style={{ padding:"14px 28px", borderRadius:18, border:"none", background:palette.sage, color:"white", fontFamily:"'Fraunces',serif", fontSize:15, fontWeight:600, cursor:"pointer" }}>Start over</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ───── MATCH SCREEN ───── */}
        {matchedParent && (
          <div className="match-overlay">
            <div style={{ fontSize:64, marginBottom:8, animation:"float 2s ease-in-out infinite" }}>🎉</div>
            <div className="match-avatars">
              <div className="match-avatar">{profile?.avatar || "🤰"}</div>
              <div className="match-avatar">{matchedParent.avatar}</div>
            </div>
            <div className="match-title">It's a match!</div>
            <div className="match-sub">
              You and <strong>{matchedParent.name}</strong> both want to connect. Both of you are in Week {Math.round((currentWeek + matchedParent.week)/2)} territory — you have so much to talk about 💛
            </div>
            <button className="match-btn primary" onClick={() => { setMatchedParent(null); }}>
              💬 Send a message
            </button>
            <button className="match-btn secondary" onClick={() => setMatchedParent(null)}>
              Keep swiping
            </button>
          </div>
        )}

        {/* Notifications Modal */}
        {notifOpen && (
          <div className="notif-modal-overlay" onClick={() => setNotifOpen(false)}>
            <div className="notif-modal" onClick={e => e.stopPropagation()}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
                <div style={{ fontFamily:"'Fraunces',serif", fontSize:22, fontWeight:600, color:palette.charcoal }}>🔔 Notifications</div>
                <button onClick={() => setNotifOpen(false)} style={{ background:palette.sagePale, border:"none", borderRadius:10, width:36, height:36, cursor:"pointer", fontSize:18 }}>✕</button>
              </div>
              {[
                { key:"weeklyGrowth", icon:"🌱", label:"Weekly growth update", sub:"Every Sunday — what changed this week" },
                { key:"teamActivity", icon:"👥", label:"Team activity", sub:"When James or Grandma Lisa takes action" },
                { key:"appointments", icon:"📅", label:"Appointment reminders", sub:"24h before midwife & scan visits" },
                { key:"kickReminder", icon:"🦵", label:"Kick count reminder", sub:"Daily reminder at 8pm to count kicks" },
                { key:"dailyTip", icon:"💡", label:"Daily tip", sub:"One small thing to do or know today" },
              ].map(item => (
                <div key={item.key} className="notif-row">
                  <div className="notif-icon-badge">{item.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:14, fontWeight:600, color:palette.charcoal }}>{item.label}</div>
                    <div style={{ fontSize:11, color:palette.muted, marginTop:2 }}>{item.sub}</div>
                  </div>
                  <button
                    className="notif-toggle"
                    style={{ background: notifSettings[item.key] ? palette.sage : palette.sageLight }}
                    onClick={() => setNotifSettings(prev => ({...prev, [item.key]: !prev[item.key]}))}
                  >
                    <div className="notif-toggle-knob" style={{ left: notifSettings[item.key] ? 23 : 3 }} />
                  </button>
                </div>
              ))}
              <div style={{ marginTop:16, fontSize:11, color:palette.muted, textAlign:"center" }}>Notifications are sent to all connected team members</div>
            </div>
          </div>
        )}

        {/* Partner Invite Modal */}
        {inviteOpen && (
          <div className="invite-modal-overlay" onClick={() => setInviteOpen(false)}>
            <div className="invite-modal" onClick={e => e.stopPropagation()}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:4 }}>
                <div style={{ fontFamily:"'Fraunces',serif", fontSize:22, fontWeight:600, color:palette.charcoal }}>📨 Invite to Team</div>
                <button onClick={() => setInviteOpen(false)} style={{ background:palette.sagePale, border:"none", borderRadius:10, width:36, height:36, cursor:"pointer", fontSize:18 }}>✕</button>
              </div>
              <div style={{ fontSize:13, color:palette.muted, marginBottom:16, lineHeight:1.5 }}>Share this code with your partner or family member. They enter it when they open the app.</div>

              <div className="invite-code-box">
                <div style={{ fontSize:12, color:palette.muted, fontWeight:600, letterSpacing:1, textTransform:"uppercase", marginBottom:8 }}>Your invite code</div>
                <div className="invite-code">{inviteCode}</div>
                <div style={{ fontSize:11, color:palette.muted, marginTop:8 }}>Expires in 7 days · Single use</div>
              </div>

              <button
                className="copy-btn"
                onClick={() => {
                  setInviteCopied(true);
                  setTimeout(() => setInviteCopied(false), 2000);
                }}
              >
                {inviteCopied ? "✓ Copied!" : "📋 Copy code"}
              </button>

              <div style={{ marginTop:20 }}>
                <div style={{ fontSize:12, fontWeight:700, color:palette.muted, letterSpacing:1, textTransform:"uppercase", marginBottom:12 }}>How it works</div>
                {[
                  { n:1, icon:"📱", text:"Share this code via WhatsApp, SMS, or any app" },
                  { n:2, icon:"📲", text:'They open "Baby on the Way" and tap "Join a team"' },
                  { n:3, icon:"🔑", text:`They enter code ${inviteCode} and instantly connect` },
                  { n:4, icon:"👥", text:"You both see real-time updates, checklists & kicks" },
                ].map(s => (
                  <div key={s.n} className="invite-step">
                    <div className="invite-step-num">{s.n}</div>
                    <div>
                      <span style={{ fontSize:16, marginRight:6 }}>{s.icon}</span>
                      <span style={{ fontSize:13, color:palette.text }}>{s.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SOS Modal */}
        {sosOpen && (
          <div className="sos-overlay" onClick={() => { if (!sosSent) setSosOpen(false); }}>
            <div className="sos-modal" onClick={e => e.stopPropagation()}>
              <div className="sos-modal-title">🚨 Emergency Alert</div>
              <div className="sos-modal-sub">
                This will immediately send an SOS alarm to all your Village contacts with your name and location.
              </div>
              <div className="sos-contact-row">
                <span className="sos-contact-avatar">👨</span>
                <div><div className="sos-contact-name">James (Partner)</div><div className="sos-contact-num">+46 70 123 4567</div></div>
                {sosSent && <span className="sos-alerted">✓ Alerted</span>}
              </div>
              <div className="sos-contact-row">
                <span className="sos-contact-avatar">👵</span>
                <div><div className="sos-contact-name">Grandma Lisa</div><div className="sos-contact-num">+46 70 987 6543</div></div>
                {sosSent && <span className="sos-alerted">✓ Alerted</span>}
              </div>
              <div className="sos-contact-row">
                <span className="sos-contact-avatar">👩‍⚕️</span>
                <div><div className="sos-contact-name">Midwife Anna</div><div className="sos-contact-num">+46 70 555 0001</div></div>
                {sosSent && <span className="sos-alerted">✓ Alerted</span>}
              </div>
              {!sosSent ? (
                <>
                  <button className="sos-confirm-btn" onClick={triggerSOS}>🚨 SEND EMERGENCY ALERT NOW</button>
                  <button className="sos-cancel-btn" onClick={() => setSosOpen(false)}>Cancel — I'm okay</button>
                </>
              ) : (
                <>
                  <div className="sos-sent-badge">✅ Alert sent to all 3 contacts!</div>
                  <button className="sos-cancel-btn" style={{ marginTop: 12, color: "#C42020", fontWeight: 600 }} onClick={() => { setSosOpen(false); setSosArmed(true); }}>Close</button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="bottom-nav">
          {["home", "baby", "shop", "track", "team", "wishes", "photos"].map(t => (
            <div key={t} onClick={() => setTab(t)}>
              <NavIcon tab={t} active={tab === t} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
