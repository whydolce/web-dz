function Kartochka() {
  return (
    <>
      <div className="cover"></div>

      <div className="profile-info">
        <img
          className="avatar"
          src="https://i.pravatar.cc/150"
          alt="Profile"
        />

        <h2>khabib</h2>
        <p>@khabib</p>

        <button className="follow-btn">Follow</button>

        <p className="description">
          Web developer | Designer | Creative person
        </p>

        <div className="stats">
          <div>
            <h3>629</h3>
            <p>Posts</p>
          </div>

          <div>
            <h3>201</h3>
            <p>Following</p>
          </div>

          <div>
            <h3>124k</h3>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kartochka;