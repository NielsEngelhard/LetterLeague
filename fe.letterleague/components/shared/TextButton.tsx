interface Props {
    text: string;
    handleClick?: () => void;
}

export default function TextButton({ text, handleClick}: Props) {
    return (
        <div className="iconic-text-one text-lg">
            {text}
        </div>
    );
}