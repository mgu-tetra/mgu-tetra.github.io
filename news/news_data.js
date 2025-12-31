const newsItems = [
    {
        date: '2026.01.01',
        label: 'Greeting',
        type: 'event', // helper for css class: notice, info, event
        title: '2026年 新年のご挨拶',
        publishAt: '2026-01-01T00:00:00+09:00', // Set to future (e.g. 2026-01-01) to hide until then
        url: './greeting_newyear_2026.html' // Relative to root. Will need adjustment based on page depth if not handled carefully.
    },
    {
        date: '2024.10.07',
        label: 'Notice',
        type: 'notice',
        title: 'Webサイトリニューアルのお知らせ',
        publishAt: '2024-10-07T00:00:00+09:00',
        url: './tetra_coming-soon/tetra_coming-soon.html'
    },
    {
        date: '2024.09.27',
        label: 'Info',
        type: 'info',
        title: 'サークル長からのご挨拶',
        publishAt: '2024-09-27T00:00:00+09:00',
        url: './tetra_coming-soon/tetra_coming-soon.html'
    },
    {
        date: '2024.09.20',
        label: 'Event',
        type: 'event',
        title: "新サークル『Tetra』活動開始",
        publishAt: '2024-09-20T00:00:00+09:00',
        url: './tetra_coming-soon/tetra_coming-soon.html'
    }
];
