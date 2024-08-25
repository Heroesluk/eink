// Simple text message that will be displayed on the reader.


interface MemoProps {
    memoTitle: string
    memoText: string
}

export const Memo = (memoProps: MemoProps) => {
    return <>
        <div>
            <h3>{memoProps.memoTitle}</h3>
            <div>{memoProps.memoText}</div>
        </div>
    </>
}