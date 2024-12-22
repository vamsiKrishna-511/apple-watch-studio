const DIAL_DATA = [
  {
    src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
    alt: "Silver Aluminum Case",
    id: "683913ba-c305-4a55-81ca-975af72875ad",
    price: 300,
  },
  {
    src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-rosegold-nc-s10_VW_PF+watch-face-46-aluminum-rosegold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3MFhCVTI0TG9VSWowa2ZNaXhKRWFaSm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWVRZ3NtU2dFUnRuSVJhQzVBeFVadWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    alt: "Rose Gold Aluminum Case",
    id: "d35cfc5c-f1c3-4d0c-81cb-ca2ad9610a92",
    price: 200,
  },
  {
    src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    alt: "Jet Black Aluminum Case",
    id: "942b9760-96bf-4098-bbf1-e98d7b053ceb",
    price: 300,
  },
  {
    src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    alt: "Natural Titanium Case",
    id: "7a8eb2f1-95b0-4d36-bf0e-c25cda3c7a49",
    price: 250,
  },
  {
    src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-gold-cell-s10_VW_PF+watch-face-46-titanium-gold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqa2NVRDBtRHBIdlNvZFpvSFN3SFNrVXlKN3h2cmJhZy9Wa2xIdm9lcGFpb285ZnlFYUluNlVpdEVDTlo4UFJtQnVWV3Bsak5WR3RZeXgwZTJxZ1FBQWQwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdUYVhFbmVlOVBZQVJ6YVVMREY4VVdDSkxMYjhBbEZsbUNjbmtLUUgvNzJC",
    alt: "Gold Titanium Case",
    id: "aff391f6-9ebe-43a3-891c-8a798ac30384",
    price: 250,
  },
  {
    src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-slate-cell-s10_VW_PF+watch-face-46-titanium-slate-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqcVNqaHozUE8wNjI5UVd3V1MzZU9ITDk1ZDUyeHhvREd4VE1qbnlsOGRsRkpsRGF2TDgzZHo4RzR2eUh2TDZyckFIRjBBZXk0a1ZITlZxZjFUK21za1dGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
    alt: "Slate Titanium Case",
    id: "4f8d8f91-7b6c-48ac-b9c8-56a6392f3728",
    price: 300,
  },
];

export default DIAL_DATA;
