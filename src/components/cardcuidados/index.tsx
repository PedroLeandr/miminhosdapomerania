import { ReactNode } from 'react';

interface CardcuidadosProps {
    icon: ReactNode;
    title: string;
    text: string;
}

export function Cardcuidados({ icon, title, text }: CardcuidadosProps) {
 return (
    <div id='cardcuidados' className="flex items-center justify-start border-red-400 ">
        <div className="icon rounded-3xl p-4 mr-3">
            <span>{icon}</span>
        </div>
        <div className="info">
            <h3 className="text-3xl">{title}</h3>
            <p>{text}</p>
        </div>
    </div>
 );
}