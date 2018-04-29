import React, {
    Component
} from "react";

export default class Loader extends Component {
    loaderStyle = {
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid #3498db',
        width: '120px',
        height: '120px',
        animation: 'spin 2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        opacity: '0.4',
        position: 'absolute',
        top: '30%',
        left: '40%'
    };

    render() {
        return (
            <div className="loader" style={this.loaderStyle}>
                <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}
                </style>
            </div>
        );
    }
}
