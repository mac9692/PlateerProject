package com.plateer.employee.controller;

import com.plateer.employee.service.BoardService;
import com.plateer.employee.vo.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/api/board")
@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping(value = "")
    public List<Board> getBoardList(){
        return boardService.getBoardList();
    }

    @GetMapping(value = "/{boardId}")
    public Board viewBoardList(@PathVariable("boardId") String boardId) {
        return boardService.viewBoard(boardId);
    }

    @PostMapping(value = "")
    public int insertBoard(String writer, String title, String content) {
        return boardService.insertBoard(writer, title, content);
    }

    @PatchMapping(value = "/{boardId}")
    public int updateBoard(String writer, String title, String content, @PathVariable String boardId) {
        return boardService.updateBoard(writer, title, content, boardId);
    }

    @DeleteMapping(value = "/{boardId}")
    public int deleteBoard(@PathVariable String boardId){
        return boardService.deleteBoard(boardId);
    }

    @GetMapping(value = "/count")
    public int countBoard(){
        return boardService.countBoardList();
    }
}
