<?php
    //require "../PHP/checkSession.php";
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($playlist['name']) ?></title>
    <link rel="stylesheet" href="/CSS/header.css">
    <link rel="stylesheet" href="/CSS/footer.css">
    <link rel="stylesheet" href="/CSS/sidebar.css">
    <link rel="stylesheet" href="/CSS/content.css">
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/contentPleyList.css">
</head>
<body>
<div id="main">
    <header id="header">
        <div id="Home">
            <a href="/index.php">
                <img src="/Image/homik.png" id="homik">
            </a>

        </div>

        <div id="Searchbar">
            <img id="icon" src="/Image/Lupa.png">
            <input id="Search" placeholder="Что хотите послушать?">
        </div>

        <div id="authButtons">
            <button class="auth-btn" id="loginBtn">Войти</button>
            <button class="auth-btn" id="registerBtn">Зарегистрироваться</button>

            <button class="auth-btn" id="accountBtn" style="display: none;">Аккаунт</button>
        </div>

    </header>
    
    <aside id="playLists">
        <div id="playlist-header">Мои плейлисты</div>

        <div id="playlist-list">
            <?php
            $playlists = $user["playlists"] ?? [];;
            foreach($playlists as $playlist): ?>
                <a href="/HTML/MyPlaylist.php?id=<?= $playlist["_id"] ?>">
                    <div class="playlist-item">
                        <img src="<?= $playlist["cover"] ?? "/Image/defaultCover.png" ?>" class="playlist-cover">
                        <div class="playlist-info">
                            <div class="playlist-name"><?= htmlspecialchars($playlist["name"]) ?></div>
                            <div class="playlist-author"><?= htmlspecialchars($user["username"]) ?></div>
                        </div>
                    </div>
                </a>
            <?php endforeach; ?>
            <a href="/HTML/MyPlaylist.php">
                <div class="playlist-item">
                    <img src="/Image/defaultCover.png" class="playlist-cover">
                    <div class="playlist-info">
                        <div class="playlist-name">Название плейлиста</div>
                        <div class="playlist-author">Автор</div>
                    </div>
                </div>
            </a>
            <a href="#" id="new-playlist-btn">
                <div class="playlist-item">
                    <img src="/Image/NewPlaylists.png" class="playlist-cover">
                    <div class="playlist-info">
                        <div class="playlist-name">Новый плейлист</div>
                    </div>
                </div>
            </a>
        </div>
    </aside>

    <div id="content">
        <div id="playlistHeader">
            <img src="<?= $playlist['cover'] ?? '/Image/defaultCover.png' ?>" alt="Обложка плейлиста" class="cover">
            <div class="info">
                <h1><?= htmlspecialchars($playlist['name']) ?></h1>
                <p><?= count($tracks) ?> треков</p>
            </div>
        </div>
        
        <div id="trackList">
            <?php foreach($tracks as $i => $track): ?>
                <div class="track" data-src="<?= htmlspecialchars($track['src']) ?>">
                    <div class="track-number"><?= $i + 1 ?></div>
                    <div class="track-title"><?= htmlspecialchars($track['name']) ?></div>
                    <div class="track-artist"><?= htmlspecialchars($track['artist']) ?></div>
                    <div class="track-duration"><?= htmlspecialchars($track['duration']) ?></div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <footer id="player">
        <div id="player-left">
            <img src="Image/defaultCover.png" id="track-cover">
            <div id="track-info">
                <span id="track-name">Название трека</span>
                <span id="track-artist">Исполнитель</span>
            </div>
        </div>

        <div id="player-center">
            <div id="controls">
                <button class="player-btn" id="prevBtn">⏮</button>
                <button class="player-btn play" id="playBtn">▶</button>
                <button class="player-btn" id="nextBtn">⏭</button>
            </div>

            <div id="progress-block">
                <span id="current-time">0:00</span>
                <input type="range" id="progress" min="0" max="100" value="0">
                <span id="total-time">3:45</span>
            </div>
        </div>

        <div id="player-right">
            <img src="Image/lowVolume.png" id="volume-icon">
            <input type="range" id="volume" min="0" max="100" value="70">
        </div>

    </footer>
</div>

<audio id="audioPlayer"></audio>
<script src="/JAVASCRIPT/index.js"></script>
<script src="/JAVASCRIPT/volume.js"></script>
<script src="/JAVASCRIPT/playTrack.js"></script>
<script src="/JAVASCRIPT/router.js"></script>
<script src="/JAVASCRIPT/NewPlaylist.js"></script>
</body>
</html>
