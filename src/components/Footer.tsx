

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-slate-950">
            <div className="container mx-auto px-6 text-center text-slate-500">
                <p className="text-sm">
                    Flip Sites © {new Date().getFullYear()}. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};
