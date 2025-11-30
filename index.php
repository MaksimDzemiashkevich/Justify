<?php
//require "PHP/checkSession.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/CSS/header.css">
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/footer.css">
    <link rel="stylesheet" href="/CSS/sidebar.css">
    <link rel="stylesheet" href="/CSS/content.css">

    <link rel="stylesheet" href="/CSS/contentPleyList.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <title>Document</title>
</head>
<body>
    <div id="main">
        <header id="header">
            <div id="Home">
                <a href="index.php">
                    <img src="Image/homik.png" id="homik">
                </a>
                
            </div>

            <div id="Searchbar">
                <img id="icon" src="Image/Lupa.png">
                <input id="Search"  placeholder="Что хотите послушать?">
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
                            <div class="playlist-cover_icon">
                                <img src="Image/NewPlaylists.png">
                            </div>
                            <div class="playlist-info">
                                <div class="playlist-name">Новый плейлист</div>
                            </div>
                        </div>
                    </a>
            </div>

        </aside>
        <div id="content">


            <div class="section">
                <div class="section-header">
                    <h2>Самое прослушиваемое недели</h2>
                </div>
                    
                <div class="playlist-row-wrapper">

                    <button class="arrow left" id="top-week-prev">
                        <img src="/Image/arrow-left.png" alt="">
                    </button>
                    <div class="playlist-row" id="top-week-row">
                        
                        <div class="card">
                            <img src="/Image/defaultCover.png" class="card-cover">
                            <div class="card-name">Top Hits</div>
                            <div class="card-author">Spotify</div>
                        </div>

                        

                        

                    </div>
                    <button class="arrow right"> <img src="/Image/arrow-right.png" alt="" id="top-week-next"></button>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>Недавно прослушано</h2>
                </div>

                <div class="playlist-row-wrapper">
                    <div class="playlist-row">
                        <?php
                        $recent = $user["recently_played"] ?? [];
                        foreach($recent as $playlist):
                        ?>
                            <div class="card">
                                <img src="<?= $playlist["cover"] ?>" class="card-cover">
                                <div class="card-name"><?= htmlspecialchars($playlist["name"]) ?></div>
                                <div class="card-author"><?= htmlspecialchars($playlist["artist"]) ?></div>
                            </div>
                        <?php endforeach; ?>
                    </div>

                </div>
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
        <div id="new-playlist-modal">
            <div class="modal-content">
                <h2>Создать новый плейлист</h2>
                <form id="create-playlist-form" action="/PHP/createPlaylist.php" method="POST">
                    <input type="text" name="playlist_name" id="playlist-name" placeholder="Название плейлиста" required>
                    <input type="url" name="playlist_cover" id="playlist-cover" placeholder="Ссылка на обложку (необязательно)">
                    <button type="submit">Создать</button>
                    <button type="button" id="close-modal">Отмена</button>
                </form>
            </div>
    </div>
    <script src="/JAVASCRIPT/index.js"></script>
    <script src="/JAVASCRIPT/volume.js"></script>
    <script src="/JAVASCRIPT/playTrack.js"></script>
    <script src="/JAVASCRIPT/content.js"></script>
    <script src="/JAVASCRIPT/router.js"></script>
    <script src="/JAVASCRIPT/NewPlaylist.js"></script>
</body>
</html>