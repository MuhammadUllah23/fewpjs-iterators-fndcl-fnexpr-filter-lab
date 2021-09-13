// Code your solution here
function findMatching(taxiDrivers, driver) {   
    let foundDriver = taxiDrivers.filter(taxiDriver => { 
    return taxiDriver.toLowerCase() === driver.toLowerCase()
    });
    return foundDriver
    }
    
    function fuzzyMatch(taxiDrivers, driver) {
        return taxiDrivers.filter(taxiDriver => 
        taxiDriver.charAt(0).toLowerCase() === driver.charAt(0).toLowerCase()
        );
        }


        function matchName(taxiDrivers, driver) {   
            let foundDriver = taxiDrivers.filter(taxiDriver => { 
            return taxiDriver.name.toLowerCase() === driver.toLowerCase()
            });
            return foundDriver
            }