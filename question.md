I'm using Redux, Immutable.js, TypeScript in my project and am confused on how to better extend Immutable's `Map` object. In my below code, `CurrentGameState`'s interface currently extends `Map<string, any>`:

```
interface CurrentGameState extends Map<string, any> { ... }
```

This works and compiles fine. However, I am looking for a way to strictly type the values. I have thought of doing something like:

```
type AllowedGameStateValues = BoardDimensions | XYCoordinate | number
interface CurrentGameState extends Map<string, AllowedGameStateValues> { ... }
```

However, by doing this, TypeScript's compiler throws the following error:

```
ERROR in /Users/.../src/redux/reducers/game.reducer.ts
[tsl] ERROR in /Users/.../src/redux/reducers/game.reducer.ts(13,7)
      TS2322: Type 'Map<string, number | [number, number] | Map<string, number>>' is not assignable to type 'CurrentGameState'.
  Types of property 'set' are incompatible.
    Type '(key: string, value: number | [number, number] | Map<string, number>) => Map<string, number | [number, number] | Map<string, number>>' is not assignable to type '(key: string, value: AllowedGameStateValues) => CurrentGameState'.
      Types of parameters 'value' and 'value' are incompatible.
        Type 'AllowedGameStateValues' is not assignable to type 'number | [number, number] | Map<string, number>'.
          Type 'BoardDimensions' is not assignable to type 'number | [number, number] | Map<string, number>'.
            Type 'Map<string, number>' is missing the following properties from type 'Map<string, number>': remove, deleteAll, removeAll, update, and 85 more.
```

Is there a solution to strictly typing `Map<string, any>`?

<br>

___

> **Dependencies**
```
| node       | 12.13.0      |
| typescript | ^3.7.5       |
| immutable  | ^4.0.0-rc.12 |
| redux      | ^4.0.5       |
```

> **Relevant code**

```
import { Map } from 'immutable'

type BoardDimensions = Map<string, number>
type XYCoordinate = [number, number]

export interface GameState {
    dimensions: BoardDimensions
    playerCoordinates: XYCoordinate
    totalSteps: number
    totalEntities: number
    remainingEntities: number
}

// Is there a way to replace `any` with a stricter type check?
interface CurrentGameState extends Map<string, any> {
    get<K extends keyof GameState>(key: K): GameState[K]
}

const initialState: CurrentGameState = Map({
    dimensions: Map({ width: 0, height: 0 }),
    playerCoordinates: [0, 0],
    totalSteps: 0,
    totalEntities: 0,
    remainingEntities: 0,
})
```

> **References**

- [TypeScript | Immutable | proper way of extending Immutable.Map type][1]

- [Using Immutable.js’s Maps with TypeScript][2]

[1]: https://stackoverflow.com/questions/43607652/typescript-immutable-proper-way-of-extending-immutable-map-type/43609180#43609180
[2]: https://github.com/immutable-js/immutable-js/issues/683
