import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const [index, setIndex] = useState(0);

  // 社員のプロフィール情報
  const profiles = [
    { name: '侍健太', age: 37, bio: 'プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。' },
    { name: '刀沢彩香', age: 32, bio: 'フルスタックエンジニア。新規サービスの設計から運用まで担当しています。' },
    { name: '戦国広志', age: 24, bio: '若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。' },
    { name: '武士山美咲', age: 27, bio: 'UI/UXデザイナー。使いやすく美しいデザインを追求しています。' },
    { name: '武者小路勇気', age: 29, bio: 'フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。' }
  ];

  const handleClick = () => {
    setIndex((prevIndex) => {
      return prevIndex === 4 ? 0 : prevIndex + 1;
    });
  };

  return (
    <>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{
          border: '1px solid #ddd',
          padding: '30px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <ProfileCard {...profiles[index]} />
          
          <button 
            onClick={handleClick}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#f8f9fa',
              color: '#333',
              border: '1px solid #ddd',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            次のプロフィール
          </button>
        </div>
      </div>
    </>
  )
}

export default App