document.addEventListener('DOMContentLoaded', function() {
    
    // 获取画廊元素
    const scrollContainer = document.getElementById('galleryScroll');
    const scrollThumb = document.getElementById('scrollThumb');
    const currentIdxDisplay = document.getElementById('currentIdx');
    const totalIdxDisplay = document.getElementById('totalIdx');

    // ============================================================
    // 1. 画廊逻辑 (Gallery Logic)
    // 只有当页面上有画廊容器时，才执行滚动逻辑
    // ============================================================
    if (scrollContainer && scrollThumb && currentIdxDisplay && totalIdxDisplay) {
        
        // 1.1 初始化计数器
        const totalItems = scrollContainer.querySelectorAll('.gallery-item').length;
        if (totalItems > 0) {
            totalIdxDisplay.textContent = totalItems.toString().padStart(2, '0');
            // 初始化进度条宽度
            scrollThumb.style.width = `${100 / totalItems}%`;
        }

        // 1.2 监听滚动事件 (更新进度条和数字)
        scrollContainer.addEventListener('scroll', () => {
            const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const scrollLeft = scrollContainer.scrollLeft;
            
            if (scrollWidth > 0) {
                const progress = scrollLeft / scrollWidth; 
                const maxLeft = 100 - (100 / totalItems);
                const leftPercent = progress * maxLeft;
                scrollThumb.style.left = `${leftPercent}%`;

                const itemWidth = scrollContainer.clientWidth;
                const currentIndex = Math.round(scrollLeft / itemWidth) + 1;
                currentIdxDisplay.textContent = currentIndex.toString().padStart(2, '0');
            }
        });

        // 1.3 终极顺滑版：全向滚动支持
        scrollContainer.addEventListener('wheel', (evt) => {
            evt.preventDefault(); 
            let totalDelta = evt.deltaY + evt.deltaX;
            scrollContainer.scrollLeft += totalDelta * 6;
        }, { passive: false });
        
        // 1.4 左右按钮支持 (如果有的话)
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -scrollContainer.clientWidth, behavior: 'smooth' });
            });
            nextBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: 'smooth' });
            });
        }
    }

    // ============================================================
    // 2. 视频遮罩逻辑 (Video Mask Logic)
    // 判断，只有页面里有遮罩层时才执行
    // ============================================================
    const videoWrappers = document.querySelectorAll('.video-wrapper');

    // 遍历每一个视频包装器
    videoWrappers.forEach(wrapper => {
        // 在当前这个 wrapper 内部寻找对应的 mask
        const mask = wrapper.querySelector('.video-mask');

        if (mask) {
            // 1. 点击当前这一个遮罩：隐藏它
            mask.addEventListener('click', () => {
                mask.style.display = 'none'; 
            });

            // 2. 鼠标移出当前这一个视频区域：恢复它的遮罩
            wrapper.addEventListener('mouseleave', () => {
                mask.style.display = 'block';
            });
        }
    });

    // ============================================================
    // 3. 图片放大逻辑 (Image Lightbox Logic)
    // ============================================================
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.modal-close');
    const galleryImages = document.querySelectorAll('.gallery-item img'); // 只选画廊里的图

    if (modal && modalImg && closeBtn) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "flex";
                modalImg.src = this.src; 
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});