import { createRoot } from 'react-dom/client';
import SampleApp from './app';

// Add div to bare HTML generated by HtmlWebpackPlugin
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <div>
        <SampleApp />
    </div>
);