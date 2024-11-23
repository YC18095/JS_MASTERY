
import { resourcePlaylist } from './resource-playlist.schema'
import {resource} from './resource.schema'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: {types: SchemaTypeDefinition[]} = {
    types:[resource, resourcePlaylist]
}
 