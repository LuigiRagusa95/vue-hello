const vue = new Vue({
    el: '#app',
    data: {
        title: 'Hello from Vue.js',
        imageHref: 'https://picsum.photos/id/237/600/350',
    },
    methods: {
        getStyle() {
            return `
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            `;
        },
        switchImage() {
            const randomID = (min, max) => Math.floor(Math.random() * (max - min) + min);
            this.imageHref = `https://picsum.photos/id/${randomID(250, 300)}/600/350`;
        },
    },
});
