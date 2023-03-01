
import React, { useEffect, useState } from 'react';

const useImage = (file) => {
    const [image, setImage] = useState(null);

    useEffect(() => {

        if (file) {
            const img = file[0];
            const formData = new FormData();
            formData.append('image', img);

            const url = 'https://api.imgbb.com/1/upload?key=8fd3dbe5918be63ad82f01b3fb69d14a';
            fetch(url, { method: 'POST', body: formData })
                .then(res => res.json())
                .then(imgData => {

                    if (imgData.success) {
                        const profile = imgData.data.url;
                        // console.log(profile);
                        setImage(profile);
                    }
                });
        }

    }, [file]);

    // console.log(image);
    return image;

};

export default useImage;