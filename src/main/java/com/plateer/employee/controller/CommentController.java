package com.plateer.employee.controller;

import com.plateer.employee.service.CommentService;
import com.plateer.employee.vo.Comment;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/api/comment")
@RestController
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping(value = "/{boardId}")
    public List<Comment> getComment(@PathVariable("boardId") String boardId) {
        return commentService.getComment(boardId);
    }

    @GetMapping(value = "/count/{boardId}")
    public Integer countComment(@PathVariable("boardId") String boardId) {
        return commentService.countComment(boardId);
    }

    @PostMapping(value = "")
    public Integer insertComment(String boardId, String writer, String content) {
        return commentService.insertComment(boardId, writer, content);

    }

    @PostMapping(value = "/update/{commentId}")
    public Integer updateComment(@PathVariable("commentId") String commentId, String content) {
        return commentService.updateComment(commentId, content);
    }

    @PostMapping(value = "/delete/{commentId}")
    public Integer deleteComment(@PathVariable("commentId") String commentId) {
        return commentService.deleteComment(commentId);
    }
}
