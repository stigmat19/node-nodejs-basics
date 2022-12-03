import {
    writeFile,
    access
} from 'node:fs/promises';

const filePath = new URL('files/fresh.txt', import.meta.url);

const isExist = async (path) => {
    try{
        await access(path);

        return true;
    } catch (err) {
        return  false
    }
}

const create = async () => {
    try {

        const isExistFile = await isExist(filePath);

        if(isExistFile){
            throw Error('FS operation failed');
        }

        writeFile(filePath, 'I am fresh and young');

    } catch (err) {
        console.log('error', err);
    }
};

await create();