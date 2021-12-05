function PayPal() {

    return (
        <table border="0" cellpadding="10" cellspacing="0" align="center">
            <tr>
                <td align="center" />
            </tr>
            <tr>
                <td align="center">
                    {/* eslint-disable-next-line */}
                    <a href="https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2" title="Secured by PayPal" onclick="javascript:window.open('https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;">
                        <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/logo-center-other-options-blue-secured-pp.png" border="0" alt="Secured by PayPal" />
                    </a>
                </td>
            </tr>
        </table>
    )
}

export default PayPal;