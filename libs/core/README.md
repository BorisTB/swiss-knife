# swiss-knife-utils

My must-have utils and type guards

## Installation

```yarn
yarn add swiss-knife-utils
```
or
```npm
npm install swiss-knife-utils
```

## Usage
```typescript
import { isFunction, isNil, isHTMLElement, getWindowFromElement } from 'swiss-knife-utils'

function handleOnClick(cb) {
    return (event) => {
        if (isNil(event)) {
            return
        }

        if (isFunction(cb)) {
            cb(event)
        }
        
        if (isHTMLElement(event.target)) {
          const domWindow = getWindowFromElement(event.target)
        }
    }
}
```

## Utils
### Logic
  - isFunction
  - isHTMLElement
  - isNil

### DOM
  - getWindowFromElement
