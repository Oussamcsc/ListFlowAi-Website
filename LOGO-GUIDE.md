# Logo Integration Guide

## Adding Your Custom Logo

To replace the placeholder logo with your custom logo:

1. **Add your logo file** to the `public/` directory:
   - Recommended formats: `.svg`, `.png`, `.webp`
   - Recommended name: `logo.svg` or `logo.png`
   - For best results, use SVG format for scalability

2. **Update the Navigation component**:
   
   In `src/components/Navigation.tsx`, replace the logo placeholder section:

   ```tsx
   {/* Replace this placeholder */}
   <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
     <span className="text-primary-foreground font-bold text-lg">L</span>
   </div>

   {/* With your logo */}
   <img 
     src="/logo.svg" 
     alt="ListFlowAI Logo" 
     className="w-8 h-8 object-contain"
   />
   ```

3. **Optional: Update favicon**:
   - Replace `public/vite.svg` with your favicon
   - Update the `<link rel="icon">` tag in `index.html`

## Logo Specifications

- **Size**: 32x32px minimum (for the navigation)
- **Background**: Transparent preferred
- **Colors**: Should work on both light and dark backgrounds
- **Format**: SVG recommended for best scaling

## Dark/Light Mode Considerations

If your logo needs different versions for light/dark modes:

```tsx
<img 
  src="/logo-light.svg" 
  alt="ListFlowAI Logo" 
  className="w-8 h-8 object-contain dark:hidden"
/>
<img 
  src="/logo-dark.svg" 
  alt="ListFlowAI Logo" 
  className="w-8 h-8 object-contain hidden dark:block"
/>
```
