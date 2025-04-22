function TopBar() {
  return (
    <header className="top-bar">
      <div className="left-section">
        {/* 로고 또는 메뉴 버튼 */}
        <button className="menu-button">
          {/* 메뉴 아이콘 */}
          <img src="/hamburger.svg" alt="hamburger" />
        </button>
        <a href="/" className="logo">
          {/* 로고 이미지 또는 텍스트 */}
          <img src="/Youtube-logo.png" alt="Youtube logo" />
          Youtube
        </a>
      </div>
      <div className="middle-section">
        {/* 검색창 */}
        <div className="search-bar">
          <input type="text" placeholder="검색" />
          <button className="search-button">
            {/* 검색 아이콘 */}
            <img src="/search.png" alt="search" />
          </button>
        </div>
        {/* 음성 검색 버튼 */}
        <button className="voice-search-button">
          {/* 음성 검색 아이콘 */}
          <img src="/mic-icon.png" alt="mic icon" />
        </button>
      </div>
      <div className="right-section">
        {/* 동영상 업로드 버튼 */}
        <button className="upload-button">
          {/* 업로드 아이콘 */}
          <img src="/Create.png" alt="Create" />
        </button>
        {/* Apps 버튼 */}
        <button className="upload-button">
          {/* Apps 아이콘 */}
          <img src="/Apps.png" alt="Apps" />
        </button>
        {/* 알림 버튼 */}
        <button className="notifications-button">
          {/* 알림 아이콘 */}
          <img src="/Notifications.png" alt="Notifications" />
        </button>
        {/* 프로필 버튼 */}
        <button className="profile-button">
          {/* 프로필 아이콘 또는 이미지 */}
          <img src="/User-Avatar.png" alt="User-Avatar" />
        </button>
      </div>
    </header>
  );
}

export default TopBar;
