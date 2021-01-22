declare module "@mdx-js/react" {
    import { ComponentType, FunctionComponent } from "react"
    type MDXProps = {
        children: React.ReactNode
        components: { wrapper: React.ReactNode }
    }
    declare const MDXProvider: FunctionComponent<ComponentsProp>

    interface ComponentDictionary {
        [name: string]: ComponentType<any>
      }

      /**
       * Prop type that includes a component dictionary
       */
      interface ComponentsProp {
        /**
         * Mapping of names for JSX components to React components
         */
        components: ComponentDictionary
      }

    // export class MDXProviderComponentsProp
}


declare module "*.png"
declare module "*.jpg"
