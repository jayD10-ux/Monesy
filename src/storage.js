export function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
  
  export function getExpenses() {
    const expenses = localStorage.getItem('expenses');
    return expenses ? JSON.parse(expenses) : [];
  }
  
  export function savePassphrase(passphrase) {
    localStorage.setItem('passphrase', passphrase);
    localStorage.setItem('userType', 'registered');
  }
  
  export function getPassphrase() {
    return localStorage.getItem('passphrase');
  }
  
  export function setGuest() {
    localStorage.setItem('userType', 'guest');
  }
  
  export function getUserType() {
    return localStorage.getItem('userType');
  }
  
  export function clearStorage() {
    localStorage.clear();
  }
  