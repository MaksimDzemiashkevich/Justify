<?php
    //require "../PHP/checkSession.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/CSS/header.css">
    <link rel="stylesheet" href="/CSS/footer.css">
    <link rel="stylesheet" href="/CSS/sidebar.css">
    <link rel="stylesheet" href="/CSS/content.css">
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/contentPleyList.css">
    <link rel="stylesheet" href="/CSS/editPlaylistModal.css">
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
            <input id="Search" placeholder="Поиск">
        </div>

        <div id="authButtons">
            <button class="auth-btn" id="loginBtn">Войти</button>
            <button class="auth-btn" id="registerBtn">Зарегистрироваться</button>

            <button class="auth-btn" id="accountBtn" style="display: none;">Аккаунт</button>
        </div>

    </header>
    <aside id="playLists">
        <div id="playlist-header">Мои плейлисты</div>
         <div class="IconDiv"> 
           <img src="/Image/playlist.png" id="playlist-icon">
        </div>
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
                    <div class="playlist-cover_icon">
                        <img src="/Image/NewPlaylists.png">
                    </div>
                    <div class="playlist-info">
                        <div class="playlist-name">Новый плейлист</div>
                    </div>
                </div>
            </a>
        </div>
    </aside>
    <div class="contentPlaylist">
        <div id="playlistHeader">
            <img src="/Image/defaultCover.png" alt="Rain Sounds Cover" class="cover">
            <div class="info">
                <h1>Name of Playlist</h1>
                <p>250 треков · 11 часов · </p>
            </div>
        </div>
        
        <div id="trackList">
            <div class="track" data-src="/Music/rain.mp3">
                <div class="track-number">1</div>
                <div class="track-title">Whispers of Rain</div>
                <div class="track-artist">Echo Nature</div>
                <div class="track-duration">3:12</div>
                <img src="/Image/trash.png" class="track-trash">
            </div>
            <div class="track" data-src="/Music/Rendezvous.mp3">
                <div class="track-number">2</div>
                <div class="track-title">Forest Drizzle</div>
                <div class="track-artist">Calm Elements</div>
                <div class="track-duration">2:45</div>
                <img src="/Image/trash.png" class="track-trash">
                
            </div>
           
        </div>
    </div>

    <footer id="player">
        <div id="player-left">
            <img src="../Image/defaultCover.png" id="track-cover">
            <div id="track-info">
                <span id="track-name">Название трека</span>
                <span id="track-artist">Исполнитель</span>
            </div>
        </div>

        <div id="player-center">
            <div id="controls">
                <button class="player-btn" id="prevBtn" style="color: orange;">⏮</button>
                <button class="player-btn play" id="playBtn" style="color: orange;">▶</button>
                <button class="player-btn" id="nextBtn" style="color: orange;">⏭</button>
            </div>

            <div id="progress-block">
                <span id="current-time">0:00</span>
                <input type="range" id="progress" min="0" max="100" value="0">
                <span id="total-time">3:45</span>
            </div>
        </div>

        <div id="player-right">
            <img src="../Image/lowVolume.png" id="volume-icon">
            <input type="range" id="volume" min="0" max="100" value="70">
        </div>

    </footer>
</div>
<audio id="audioPlayer"></audio>



<div id="new-playlist-modal">
    <div class="modal-content">
        <h2>Создать новый плейлист</h2>
        <form id="create-playlist-form" action="/PHP/createPlaylist.php" method="POST">
            <input type="text" name="playlist_name" id="playlist-name" placeholder="Название плейлиста" required>
           
            <button type="submit">Создать</button>
            
        </form>
    </div>
</div>

<div id="edit-playlist-modal" class="modal">
    <div class="modal-content">
        <h2>Изменение сведений</h2>
        
        <form id="edit-playlist-form">
            <div class="form-group">
                <input type="text" id="edit-playlist-name" placeholder="Название плейлиста" required>
            </div>
            
            <div class="form-group">
                <label class="file-upload">
                    <input type="file" accept="image/*" style="display: none;">
                    <div class="upload-area">
                        <img src="/Image/folder.png" class="custom-upload-icon" alt="Загрузить">
                        <span>Загрузить</span>
                    </div>
                </label>
            </div>
            
            <div class="form-actions">
                <button type="submit">Сохранить</button>
                <button type="button" id="close-edit-modal">Отмена</button>
            </div>
        </form>
    </div>
</div>

<script src="/JAVASCRIPT/index.js"></script>
<script src="/JAVASCRIPT/volume.js"></script>
<script src="/JAVASCRIPT/playTrack.js"></script>
<script src="/JAVASCRIPT/router.js"></script>
<script src="/JAVASCRIPT/editPlaylist.js"></script>
<script src="/JAVASCRIPT/NewPlaylist.js"></script>
 <script src="/JAVASCRIPT/deletetrack.js"></script>
</body>
</html>