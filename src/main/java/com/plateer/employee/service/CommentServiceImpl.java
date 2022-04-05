package com.plateer.employee.service;

import com.plateer.employee.mapper.CommentMapper;
import com.plateer.employee.vo.Comment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService{

    private final CommentMapper commentMapper;

    @Override
    public List<Comment> getComment(String boardId) {
        return commentMapper.getComment(boardId);
    }

    @Override
    public Integer countComment(String boardId) {
        return commentMapper.countComment(boardId);
    }

    @Override
    public Integer insertComment(String boardId, String writer, String content) {
        return commentMapper.insertComment(boardId, writer, content);
    }

    @Override
    public Integer updateComment(String commentId, String content) {
        return commentMapper.updateComment(commentId, content);
    }

    @Override
    public Integer deleteComment(String commentId) {
        return commentMapper.deleteComment(commentId);
    }
}
