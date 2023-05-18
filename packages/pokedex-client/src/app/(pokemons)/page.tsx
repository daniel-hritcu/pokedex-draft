import Image from "next/image";
import { getPokemons } from "./actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Toolbar from "./toolbar";

export const dynamic = 'force-dynamic'

type Props = {
 searchParams?: {
  page?: string;
  name?: string;
 }
};

export default async function Home(props: Props) {

  const currentPage = props.searchParams?.page ? parseInt(props.searchParams?.page) : 0;

  const data = await getPokemons({
    take: 10,
    skip: currentPage * 10,
    name: props.searchParams?.name,
  });

  return (
    <div className="container mx-auto py-10 space-y-4">
      <Toolbar/>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Sprite</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>HP</TableHead>
            <TableHead>Attack</TableHead>
            <TableHead>Defense</TableHead>
            <TableHead>Sp. Atk</TableHead>
            <TableHead>Sp. Def</TableHead>
            <TableHead>Speed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.pokemons.map((pokemon) => {
            const paddedId = pokemon.id.toString().padStart(3, "0");
            const total = Object.values(pokemon.base).reduce(
              (acc, value) => acc + value,
              0
            );

            return (
              <TableRow key={pokemon.id}>
                <TableCell className="font-medium">{paddedId}</TableCell>
                <TableCell>
                  <Image
                    width={36}
                    height={36}
                    src={`https://github.com/fanzeyi/pokemon.json/blob/master/images/${paddedId}.png?raw=true`}
                    alt={pokemon.name.english}
                  />
                </TableCell>
                <TableCell>{pokemon.name.english}</TableCell>
                <TableCell className="space-x-1">
                  {pokemon.type?.map((type, index) => (
                    <Badge key={index} variant={"outline"}>
                      {type}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell>{total}</TableCell>
                {Object.values(pokemon.base).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex justify-end space-x-2">
        <Button disabled={currentPage === 0}>
          <Link href={`/?page=${currentPage - 1 }`}>
            Previous
          </Link>
        </Button>
        <Button
          disabled={currentPage === Math.floor(data.pokemonCount / 10)}
        >
          <Link href={`/?page=${currentPage + 1}`}>
            Next
          </Link>
        </Button>
      </div>
    </div>
  );
}
