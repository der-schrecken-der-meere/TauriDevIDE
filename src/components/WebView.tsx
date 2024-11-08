import { getWD } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import StartDialog from './StartDialog';

const WebView = (props: HTMLAttributes<HTMLDivElement>) => {

    const wd = getWD();

    return (
        <div {...props}>
            {
                !wd
                    ? <StartDialog className='w-full h-full flex flex-col items-center justify-center'/>
                    : null
            }
        </div>
    )
}

export default WebView