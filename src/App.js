import React, { useState } from 'react';
import './App.css';

const EmojiTranslator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [similarEmojis, setSimilarEmojis] = useState([]);
  const [activeTab, setActiveTab] = useState('Expressions');

  const emojiDictionary = {
    hearteyes: '😍',
    starstruck: '🤩',
    blowingkiss: '😘',
    inlove: '🥰',
    hug: '🤗',
    thinking: '🤔',
    eyeroll: '🙄',
    unamused: '😒',
    relieved: '😌',
    sunglasses: '😎',
    nerd: '🤓',
    kiss: '💋',
    loveletter: '💌',
    cupid: '💘',
    heartbreak: '💔',
    couple: '👫',
    family: '👪',
    handshake: '🤝',
    victory: '✌️',
    peace: '☮️',
    angel: '👼',
    devil: '😈',
    smiley: '😃',
    laugh: '😆',
    tears: '😢',
    sleepy: '😴',
    sick: '🤒',
    dizzy: '😵',
    ghost: '👻',
    skull: '💀',
    clown: '🤡',
    sparkles: '✨',
    fireworks: '🎆',
    gift: '🎁',
    balloon: '🎈',
    confetti: '🎊',
    wedding: '💒',
    ring: '💍',
    bouquet: '💐',
    chocolate: '🍫',
    wine: '🍷',
    candle: '🕯️',
    teddybear: '🧸',
    heartpulse: '💗',
    heartribbon: '💝',
    heartonfire: '❤️‍🔥',
    heartsparkles: '❤️‍🔆',
    heartarrow: '💘',
    heartbeat: '💓',
    heartglobe: '🌍❤️',
  };

  const emojiDescriptions = {
    '😍': 'A face with heart-shaped eyes',
    '🤩': 'A face with star-struck eyes',
    '😘': 'A face blowing a kiss',
    '🥰': 'A smiling face with hearts',
    '🤗': 'A hugging face',
    '🤔': 'A thinking face',
    '🙄': 'A face with rolling eyes',
    '😒': 'An unamused face',
    '😌': 'A relieved face',
    '😎': 'A face with sunglasses',
    '🤓': 'A nerd face',
    '💋': 'A pair of lips indicating a kiss',
    '💌': 'A love letter',
    '💘': 'A heart with an arrow',
    '💔': 'A broken heart',
    '👫': 'A couple holding hands',
    '👪': 'A family',
    '🤝': 'A handshake',
    '✌️': 'A victory hand gesture',
    '☮️': 'A peace symbol',
    '👼': 'An angel',
    '😈': 'A smiling devil',
    '😃': 'A smiling face',
    '😆': 'A face with tears of joy',
    '😢': 'A crying face',
    '😴': 'A sleepy face',
    '🤒': 'A face with thermometer and a cold',
    '😵': 'A dizzy face',
    '👻': 'A ghost',
    '💀': 'A skull',
    '🤡': 'A clown face',
    '✨': 'Sparkles',
    '🎆': 'Fireworks',
    '🎁': 'A gift',
    '🎈': 'A balloon',
    '🎊': 'Confetti',
    '💒': 'A wedding',
    '💍': 'A ring',
    '💐': 'A bouquet of flowers',
    '🍫': 'A chocolate bar',
    '🍷': 'A wine glass',
    '🕯️': 'A lit candle',
    '🧸': 'A teddy bear',
    '💗': 'A pink heart pulsating',
    '💝': 'A heart with a ribbon',
    '❤️‍🔥': 'A heart on fire',
    '❤️‍🔆': 'A heart with sparkles',
    '💘': 'A heart with an arrow',
    '💓': 'A heartbeat',
    '🌍❤️': 'A heart on top of a globe',
  };

  const emojiCategories = [
    {
      name: 'Expressions',
      emojis: [
        '😍',
        '🤩',
        '😘',
        '🥰',
        '🤗',
        '🤔',
        '🙄',
        '😒',
        '😌',
        '😎',
        '🤓',
      ],
    },
    {
      name: 'Love',
      emojis: ['💋', '💌', '💘', '💔'],
    },
    {
      name: 'Family',
      emojis: ['👪'],
    },
    {
      name: 'Gestures',
      emojis: ['🤝', '✌️', '☮️'],
    },
    {
      name: 'Characters',
      emojis: ['👼', '😈'],
    },
    {
      name: 'Faces',
      emojis: ['😃', '😆', '😢', '😴', '🤒', '😵'],
    },
    {
      name: 'Objects',
      emojis: [
        '👻',
        '💀',
        '🤡',
        '✨',
        '🎆',
        '🎁',
        '🎈',
        '🎊',
        '💒',
        '💍',
        '💐',
        '🍫',
        '🍷',
        '🕯️',
        '🧸',
      ],
    },
    {
      name: 'Hearts',
      emojis: ['💗', '💝', '❤️‍🔥', '❤️‍🔆', '💘', '💓', '🌍❤️'],
    },
  ];

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    translateText(e.target.value);
    findSimilarEmojis(e.target.value);
  };

  const translateText = (text) => {
    let translated = text;

    Object.keys(emojiDictionary).forEach((keyword) => {
      const regex = new RegExp(keyword, 'gi');
      translated = translated.replace(regex, emojiDictionary[keyword]);
    });

    setTranslatedText(translated);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
  };

  const findSimilarEmojis = (input) => {
    const userTypedEmojis = Object.keys(emojiDictionary).filter((keyword) => {
      const regex = new RegExp(keyword, 'gi');
      return regex.test(input);
    });

    const emojis = userTypedEmojis
      .map((keyword) => emojiDictionary[keyword])
      .filter((emoji) => emoji !== translatedText);

    setSimilarEmojis(emojis);
  };

  const handleCopySimilarEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji);
  };

  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="emoji-translator">
      <h1 className="title">Emoji Translator</h1>
      <div className="categories">
        {emojiCategories.map((category) => (
          <div
            key={category.name}
            className={`category ${activeTab === category.name ? 'active' : ''}`}
            onClick={() => handleTabClick(category.name)}
          >
            {emojiDictionary[category.emojis[0]]} {category.name}
          </div>
        ))}
      </div>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Enter text"
            value={inputText}
            onChange={handleInputChange}
          />
          <button className="copy-button" onClick={handleCopyToClipboard}>
            Copy Emoji
          </button>
        </div>
        <div className="translation-container">
          <div className="translated-text">{translatedText}</div>
          {similarEmojis.length > 0 && (
            <div className="similar-emojis">
              <div className="similar-emojis-label">Similar Emojis:</div>
              <div className="similar-emojis-list">
                {similarEmojis.map((emoji) => (
                  <span
                    key={emoji}
                    className="similar-emoji"
                    onClick={() => handleCopySimilarEmoji(emoji)}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="emoji-grid">
        {emojiCategories.map((category) =>
          activeTab === category.name ? (
            <div key={category.name} className="emoji-category">
              <h2 className="category-title">{category.name}</h2>
              <div className="emoji-list">
                {category.emojis.map((emoji) => (
                  <span key={emoji} className="emoji" title={emojiDescriptions[emoji]}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default EmojiTranslator;