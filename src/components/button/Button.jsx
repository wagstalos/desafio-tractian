export default function Button({ children, className, onClick }) {
    return (
        <div>
            <button type="button" className={className}>{children}</button>
        </div>
    )
}