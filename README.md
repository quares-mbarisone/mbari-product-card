# mbari-product-card

Este es un paquete de pruebas de despliegue en NPM!

### By Matias Barisone :)

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mbari-product-card'
```

```
<ProductCard      
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10
    }}
    >
    {
        () => (
        <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />          
        </>
        )
    }
</ProductCard>
```