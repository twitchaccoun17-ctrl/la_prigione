import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
    kit: {
        adapter: adapter(),
        paths: {
            base: dev ? '' : '/NOME-DEL-REPO'   // <-- metti il nome del repo GitHub
        }
    }
};
