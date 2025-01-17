import Image from "next/image"
import { Button } from "./ui/button"

interface ButtonProps {
    children: React.ReactNode,
    isLoading: boolean,
    className?: string,
}
const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
    return (
        <Button type="submit" disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
            {isLoading ? (
                <div className="flex items-center gap-4">
                    <Image
                        src='/assets/icons/loader.svg'
                        width={24}
                        height={24}
                        alt='loader'
                        className="animate-spin"
                    />
                    Loading ...
                </div>
            ): children}
        </Button>
    )
}

export default SubmitButton