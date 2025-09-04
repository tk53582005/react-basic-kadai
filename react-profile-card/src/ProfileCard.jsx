import React from 'react';

function ProfileCard({ name, age, bio }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      marginBottom: '20px',
      backgroundColor: '#fff',
      width: '800px',
      margin: '0 auto 20px auto'
    }}>
      <h2 style={{ 
        marginTop: '0',
        marginBottom: '16px',
        color: '#333',
        fontSize: '24px'
      }}>
        {name}
      </h2>
      
      <p style={{ 
        margin: '8px 0',
        fontSize: '16px',
        color: '#666'
      }}>
        【年齢】{age}歳
      </p>
      
      <p style={{ 
        margin: '8px 0',
        fontSize: '16px',
        color: '#666'
      }}>
        【自己紹介】{bio}
      </p>
    </div>
  );
}

export default ProfileCard;