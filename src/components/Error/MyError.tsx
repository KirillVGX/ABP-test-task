export default function MyError({ text }: { text: string }) {
    return <p className="max-w-3xl mx-auto text-red-600 text-xl">{text}</p>
}