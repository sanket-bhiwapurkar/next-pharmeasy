# Challenges

| Sr. No. | Challenge                                                                             | Solution                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1       | tailwind classes was not working in header.tsx                                        | Because Component folder was outside src/app. I moved it inside and globals.css was accessible                              |
| 2       | Not able to customise mui component (button) color theme like primary, secondary etc  | Mui was not properly installed for next.js so I uninstalled @mui/material and installed @mui/material-nextjs @emotion/cache |
| 3       | Tailwind or other classes not working in mui comp (eg., className="me-5 lg:hidden")   | use sx={{}} prop instead                                                                                                    |
| 4       | White creating useViewportWidth hook, it wasn't working because useEffect is SSR hook | So adding "use client" in header.tsx at the top changed to CSR                                                              |
