import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ReadingView from '@/views/ReadingView.vue';
import SongsView from '@/views/SongsView.vue';
import CommunityView from '@/views/CommunityView.vue';
import BibleView from '@/views/BibleView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/reading',
            name: 'reading',
            component: ReadingView,
        },
        {
            path: '/songs',
            name: 'songs',
            component: SongsView,
        },
        {
            path: '/community',
            name: 'community',
            component: CommunityView,
        },
        {
            path: '/bible',
            name: 'bible',
            component: BibleView,
        },
    ],
});

export default router;