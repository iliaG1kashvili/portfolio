public class CoverTheTiles extends fop.w3box.MiniJava {


    public static void outputTiles(boolean[] tiles) {
        StringBuilder sb = new StringBuilder("Open tiles: 1:");
        sb.append(tiles[0]);
        for (int i = 1; i < tiles.length; i++) {
            sb.append(" ").append(i + 1).append(":").append(tiles[i]);
        }
        write(sb.toString());
    }

    public static void main(String[] args) throws IllegalAccessException {
        // TODO

        boolean[] tiles = {true, true, true, true,true,true, true, true, true,true};


        int points1 = 0;
        int point2 = 0;
        boolean player1wins = false;
        boolean player2wins = false;

        for (int turn = 1; turn < 21; ++turn) {
            int roll1=dice();
            int roll2=dice();
            int tile1;
            int tile2;
            if (turn % 2 == 1) {
                while(true){
                    write("Player 1 numbers:");
                    write(roll1);
                    write(roll2);
                    outputTiles(tiles);
                    write("which tiles to cover by player1? (0 for no valid combination)");
                    tile1=readInt("tile1:");
                    tile2=readInt("tile2:");

                    if(tile1==0 || tile2==0) {
                        for(int j = 0;j<tiles.length;j++){
                            if (tiles[j]){
                                points1 += j+1;
                            }
                        }
                        break;
                    } if(tile1+tile2 == roll1+roll2 && tile1 != tile2 && tiles[tile1-1] && tiles[tile2 -1]){
                        if(tile1 + tile2 == roll1 + roll2) {
                            tiles[tile1-1]=false;
                            tiles[tile2-1]=false;
                        }
                        break;
                    }
                }

                for (boolean tile : tiles) {
                    if (tile) {
                        player1wins = false;
                        break;
                    } else {
                        player1wins = true;
                    }
                }
                if (player1wins){
                    write("PLayer 1 wins!");
                    break;
                }
            }
            else {
                while(true){
                    write("Player 2 numbers:");
                    write(roll1);
                    write(roll2);
                    outputTiles(tiles);
                    write("which tiles to cover by player 2? (0 for no valid combination)");
                    tile1=readInt("tile1:");
                    tile2=readInt("tile2:");

                    if(tile1==0 || tile2==0) {
                        for(int j = 0;j<tiles.length;j++){
                            if (tiles[j]){
                                points1 += j+1;
                            }
                        }
                        break;
                    } if(tile1+tile2 == roll1+roll2 && tile1 != tile2 && tiles[tile1-1] && tiles[tile2 -1]){
                        if(tile1 + tile2 == roll1 + roll2) {
                            tiles[tile1-1]=false;
                            tiles[tile2-1]=false;
                        }
                        break;
                    }
                }

                for (boolean tile : tiles) {
                    if (tile) {
                        player2wins = false;
                        break;
                    } else {
                        player2wins = true;
                    }
                }

                if (player2wins){
                    write("PLayer 2 wins!");
                    break;
                }
            }
        }
        if (!player1wins && !player2wins) {
            if (points1 > point2) {
                write("Player 2 wins!");
            } if (points1 < point2) {
                write("Player 2 wins!");
            } if (points1==point2){
                write("draw!");
            }
        }
    }
}