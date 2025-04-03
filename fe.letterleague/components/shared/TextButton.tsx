interface Props {
    text: string;
    handleClick?: () => void;
    colorTheme: 1 | 2 | 3 | 4;
}

export default function TextButton({ text, handleClick, colorTheme = 1}: Props) {
    const colorThemeClasses: Record<number, string> = {
        1: 'iconic-text-one',
        2: 'iconic-text-two'
    };

    return (
        <button className={`${colorThemeClasses[colorTheme]} text-lg`}
                onClick={handleClick}>
            {text}
        </button>
    );
}