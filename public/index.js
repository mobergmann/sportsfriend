<<<<<<< HEAD
import {get as get_account} from "/scripts/api/account.js"

async function main() {
    try {
        await get_account();
    } catch (error) {
        return;
    }
    
    // disable buttons
    document.querySelector("#button-sign_up").disabled = true;
    document.querySelector("#button-sign_in").disabled = true;
    
    document.querySelector("#already_signd_in").style.display = "block";
=======
import {ping} from "/scripts/requests.js"

try {
    await ping();
    document.querySelector("#already_loggedin").style.display = "block";
>>>>>>> main
}
catch (error) {}
