package com.plateer.employee.mapper;

import com.plateer.employee.vo.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {

    public List<Comment> getComment(String boardId);

    public Integer countComment(String boardId);

    public Integer insertComment(String boardId, String writer, String content);

    public Integer updateComment(String commentId, String content);

    public Integer deleteComment(String commentId);
}
