import './../App.css';


const Form = ({ fromChain, setFromChain, toToken, setToToken, sendFunction }) => {
    return (
        <div id="content" className="form">
            <span id="transfer-to-title">Transfer NFT to:</span>
            <select id="to" type="text" name="From Chain ID:" value={fromChain} onChange={(e) => setFromChain(e.target.value)} >
                <option value="Ethereum">Ethereum</option>
                <option value="Polygon">Polygon</option>
                <option value="Avalanche">Avalanche</option>
            </select>

            <label>
                <span> NFT TOKEN: </span>
                <input type="text" name="From Chain ID:" value={toToken} onChange={(e) => setToToken(e.target.value)} />
            </label>

            <button id="confirm" onClick={() => sendFunction()}>Send</button>
            <span id="inventory-title">Inventory (<span id="network">No Network</span>):</span>
            <div id="inventory"></div>

        </div>)
};
export default Form;