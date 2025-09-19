<?php if (isset($data['result']['reviews'])): ?>
    <h2>Avaliações dos Pacientes</h2>
    <div class="swiper reviews-swiper">
        <div class="swiper-wrapper">
            <?php foreach ($data['result']['reviews'] as $review):
                $author = htmlspecialchars($review['author_name']);
                $text   = htmlspecialchars($review['text']);
                $rating = $review['rating'];
                $time   = date("d/m/Y H:i", $review['time']);
            ?>
                <div class="swiper-slide review">
                    <strong><?= $author ?></strong> ⭐ <?= $rating ?><br>
                    <em><?= $time ?></em>
                    <p><?= $text ?></p>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
<?php else: ?>
    <p>Nenhuma avaliação encontrada.</p>
<?php endif; ?>