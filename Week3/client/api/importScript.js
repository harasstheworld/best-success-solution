import { useEffect } from 'react';

const importScript = (resourceURL) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceURL;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [resourceURL]);
}

export default importScript;